"""Checks for incorrect evidence and stale source acceptance."""
import unittest
import argparse
import contextlib
import io
import json
from unittest.mock import patch
from article_style import AXES, digest, query, validate


class EvidenceValidation(unittest.TestCase):
    def setUp(self):
        self.corpus = [{"id": "A001", "body": "美しい。", "body_lines": [
            {"id": "A001-L0001", "text": "美しい。"}]}]
        self.manifest = {"selection": [{"id": "A001", "body_sha256": digest("美しい。")}]}
        self.result = {"schema_version": "1.0", "articles": [{"id": "A001",
            **{axis: {"label": "短文", "observation": "短く切る", "refs": ["A001-L0001"]} for axis in AXES},
            "quotes": [{"ref": "A001-L0001", "text": "美しい。"}], "limits": "例示"}],
            "comparisons": [{"kind": "common", "evidence": [{"ref": "A001-L0001", "text": "美しい"}]}],
            "synthesis_markdown": "短い文（A001-L0001）。"}

    def test_valid_evidence(self):
        self.assertTrue(validate(self.corpus, self.manifest, self.result)["success"])

    def test_fabricated_quote_rejected(self):
        self.result["articles"][0]["quotes"][0]["text"] = "とても美しい。"
        with self.assertRaisesRegex(ValueError, "exactly match"):
            validate(self.corpus, self.manifest, self.result)

    def test_changed_source_rejected(self):
        self.corpus[0]["body"] = "変更後。"
        self.corpus[0]["body_lines"][0]["text"] = "変更後。"
        with self.assertRaisesRegex(ValueError, "Source changed"):
            validate(self.corpus, self.manifest, self.result)

    def test_tampered_source_line_rejected(self):
        self.corpus[0]["body_lines"][0]["text"] = "原文に存在しない行"
        with self.assertRaisesRegex(ValueError, "Source line differs"):
            validate(self.corpus, self.manifest, self.result)

    def test_duplicate_source_id_rejected(self):
        self.corpus.append(self.corpus[0])
        with self.assertRaisesRegex(ValueError, "Duplicate source"):
            validate(self.corpus, self.manifest, self.result)

    def test_wrong_article_reference_rejected(self):
        self.result["articles"][0]["rhythm_and_pause"]["refs"] = ["NT001-L0001"]
        with self.assertRaisesRegex(ValueError, "outside article"):
            validate(self.corpus, self.manifest, self.result)

    def test_missing_article_rejected(self):
        self.result["articles"] = []
        with self.assertRaisesRegex(ValueError, "coverage"):
            validate(self.corpus, self.manifest, self.result)

    def test_unknown_summary_reference_rejected(self):
        self.result["synthesis_markdown"] = "A099-L0001"
        with self.assertRaisesRegex(ValueError, "synthesis reference"):
            validate(self.corpus, self.manifest, self.result)

    def test_query_returns_only_requested_axis(self):
        output = io.StringIO()
        with patch("article_style.read", return_value=self.result), contextlib.redirect_stdout(output):
            query(argparse.Namespace(run="unused", axis="rhythm_and_pause", text="短く"))
        hits = json.loads(output.getvalue())
        self.assertEqual(hits[0]["id"], "A001")
        self.assertEqual(list(hits[0]["matches"]), ["rhythm_and_pause"])

    def test_query_no_match_is_empty(self):
        output = io.StringIO()
        with patch("article_style.read", return_value=self.result), contextlib.redirect_stdout(output):
            query(argparse.Namespace(run="unused", axis=None, text="存在しない分類"))
        self.assertEqual(json.loads(output.getvalue()), [])


if __name__ == "__main__":
    unittest.main()
