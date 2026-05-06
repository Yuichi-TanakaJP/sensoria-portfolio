import React from 'react';
import { AlertTriangle, CheckCircle2, CircleDashed, ExternalLink, FileSearch } from 'lucide-react';
import {
  type AuditDecision,
  type AuthorCheckStatus,
  type ExtractionStatus,
  type Issue15AuditCategory,
  type Issue15SourceCandidate,
  issue15SourceCandidates,
  type UrlCheckStatus,
} from '../data/issue15SourceCandidates';

const storageKey = 'issue15-source-audit-state-v1';

const categoryLabels: Record<Issue15AuditCategory, string> = {
  museum: '美術館',
  hotel: 'ホテル',
  traditional_craft: '伝統工芸',
  media_history: '雑誌/媒体履歴',
  reference: '参照',
};

const urlStatusLabels: Record<UrlCheckStatus, string> = {
  unchecked: '未確認',
  valid: '有効',
  redirected: 'リダイレクト',
  blocked: '閲覧制限',
  invalid: '無効',
  needs_manual_check: '要手動確認',
};

const authorStatusLabels: Record<AuthorCheckStatus, string> = {
  unchecked: '未確認',
  confirmed: '本人確認済み',
  unclear: '不明',
  not_author: '本人記事ではない',
};

const extractionStatusLabels: Record<ExtractionStatus, string> = {
  not_started: '未抽出',
  candidate_found: '候補あり',
  no_target_found: '対象なし',
  normalized: '正規化済み',
  approved: '採用',
  rejected: '除外',
};

const decisionLabels: Record<AuditDecision, string> = {
  unreviewed: '未判定',
  keep_candidate: '候補維持',
  hold: '保留',
  exclude: '除外',
  approved: '採用',
};

const getDecisionClassName = (decision: AuditDecision): string => {
  if (decision === 'approved') {
    return 'border-emerald-200 bg-emerald-50 text-emerald-800';
  }
  if (decision === 'exclude') {
    return 'border-rose-200 bg-rose-50 text-rose-800';
  }
  if (decision === 'hold') {
    return 'border-amber-200 bg-amber-50 text-amber-800';
  }
  if (decision === 'keep_candidate') {
    return 'border-sky-200 bg-sky-50 text-sky-800';
  }
  return 'border-stone-200 bg-stone-100 text-stone-600';
};

const getDecisionIcon = (decision: AuditDecision): React.ReactNode => {
  if (decision === 'approved') {
    return <CheckCircle2 className="h-4 w-4" aria-hidden="true" />;
  }
  if (decision === 'exclude' || decision === 'hold') {
    return <AlertTriangle className="h-4 w-4" aria-hidden="true" />;
  }
  return <CircleDashed className="h-4 w-4" aria-hidden="true" />;
};

const StatusPill: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center border border-stone-200 bg-white px-2.5 py-1 text-[11px] tracking-widest text-stone-600">
    {label}
  </span>
);

type SelectFieldProps<Value extends string> = {
  label: string;
  value: Value;
  labels: Record<Value, string>;
  onChange: (value: Value) => void;
};

const SelectField = <Value extends string>({ label, value, labels, onChange }: SelectFieldProps<Value>) => (
  <label className="block border border-stone-100 bg-stone-50 p-3">
    <span className="block text-[11px] tracking-widest text-stone-400">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as Value)}
      className="mt-2 w-full border border-stone-200 bg-white px-3 py-2 text-sm text-stone-800 outline-none transition-colors focus:border-earth-terra focus:ring-2 focus:ring-earth-terra/20"
    >
      {Object.entries(labels).map(([optionValue, optionLabel]) => (
        <option key={optionValue} value={optionValue}>
          {optionLabel as string}
        </option>
      ))}
    </select>
  </label>
);

const loadCandidates = (): Issue15SourceCandidate[] => {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) {
      return issue15SourceCandidates;
    }

    const savedCandidates = JSON.parse(stored) as Issue15SourceCandidate[];
    const savedById = new Map(savedCandidates.map((item) => [item.id, item]));

    return issue15SourceCandidates.map((candidate) => ({
      ...candidate,
      ...savedById.get(candidate.id),
      expectedCategories: candidate.expectedCategories,
      title: candidate.title,
      url: candidate.url,
      sourceGroup: candidate.sourceGroup,
    }));
  } catch {
    return issue15SourceCandidates;
  }
};

const Issue15AuditPage: React.FC = () => {
  const [candidates, setCandidates] = React.useState<Issue15SourceCandidate[]>(loadCandidates);

  React.useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(candidates));
  }, [candidates]);

  const updateCandidate = <Key extends keyof Issue15SourceCandidate>(
    id: string,
    key: Key,
    value: Issue15SourceCandidate[Key],
  ) => {
    setCandidates((current) => current.map((item) => (item.id === id ? { ...item, [key]: value } : item)));
  };

  const markCheckedNow = (id: string) => {
    updateCandidate(id, 'checkedAt', new Date().toISOString().slice(0, 10));
  };

  const total = candidates.length;
  const unchecked = candidates.filter((item) => item.urlStatus === 'unchecked').length;
  const confirmed = candidates.filter((item) => item.authorStatus === 'confirmed').length;
  const pending = candidates.filter((item) => item.decision === 'unreviewed').length;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5">
          <a href="#/works" className="text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            Works
          </a>
          <p className="text-sm tracking-widest text-stone-500">Issue #15 Audit</p>
          <a href="#" className="text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            Top
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-screen-xl px-6 py-12 md:py-16">
        <section className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-earth-sage">Source Audit</span>
            <h1 className="font-serif text-3xl leading-tight text-stone-900 md:text-5xl">
              #15 採用前の
              <br />
              確認用リンク集
            </h1>
          </div>
          <p className="text-sm leading-loose text-stone-600 md:text-base">
            このページは本番掲載前の確認ビューです。URLの生存確認、本人記事確認、抽出候補、採用判断を分けて記録し、
            根拠が弱い情報を実績ページへ混ぜないために使います。画面上の変更はこのブラウザに保存されます。
          </p>
        </section>

        <section className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ['候補URL', total],
            ['URL未確認', unchecked],
            ['本人確認済み', confirmed],
            ['未判定', pending],
          ].map(([label, value]) => (
            <div key={label} className="border border-stone-200 bg-white p-5">
              <span className="block font-serif text-3xl text-earth-gold">{value}</span>
              <span className="mt-2 block text-xs tracking-widest text-stone-500">{label}</span>
            </div>
          ))}
        </section>

        <section className="mb-8 border border-stone-200 bg-white p-5 md:p-6">
          <div className="flex items-start gap-3">
            <FileSearch className="mt-1 h-5 w-5 flex-none text-earth-terra" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-xl text-stone-900">チェックランの順序</h2>
              <p className="mt-2 text-sm leading-loose text-stone-600">
                1. URL生存確認 → 2. 本人記事確認 → 3. 抽出候補作成 → 4. 正規化 → 5. 採用判定。
                採用判定が終わるまで、Works本番表示データには反映しません。
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          {candidates.map((item) => (
            <article key={item.id} className="border border-stone-200 bg-white p-5 md:p-6">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_220px]">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {item.expectedCategories.map((category) => (
                      <StatusPill key={category} label={categoryLabels[category]} />
                    ))}
                  </div>
                  <h3 className="font-serif text-xl leading-relaxed text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-xs tracking-widest text-stone-400">{item.sourceGroup}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 break-all text-sm text-earth-terra transition-colors hover:text-stone-900"
                  >
                    {item.url}
                    <ExternalLink className="h-4 w-4 flex-none" aria-hidden="true" />
                  </a>
                </div>

                <div className={`flex h-fit items-center gap-2 border px-3 py-2 text-sm ${getDecisionClassName(item.decision)}`}>
                  {getDecisionIcon(item.decision)}
                  <span className="tracking-widest">{decisionLabels[item.decision]}</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
                <SelectField
                  label="URL"
                  value={item.urlStatus}
                  labels={urlStatusLabels}
                  onChange={(value) => updateCandidate(item.id, 'urlStatus', value)}
                />
                <SelectField
                  label="AUTHOR"
                  value={item.authorStatus}
                  labels={authorStatusLabels}
                  onChange={(value) => updateCandidate(item.id, 'authorStatus', value)}
                />
                <SelectField
                  label="EXTRACTION"
                  value={item.extractionStatus}
                  labels={extractionStatusLabels}
                  onChange={(value) => updateCandidate(item.id, 'extractionStatus', value)}
                />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px]">
                <SelectField
                  label="DECISION"
                  value={item.decision}
                  labels={decisionLabels}
                  onChange={(value) => updateCandidate(item.id, 'decision', value)}
                />
                <div className="border border-stone-100 bg-stone-50 p-3">
                  <p className="text-[11px] tracking-widest text-stone-400">CHECKED AT</p>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="date"
                      value={item.checkedAt ?? ''}
                      onChange={(event) => updateCandidate(item.id, 'checkedAt', event.target.value || null)}
                      className="min-w-0 flex-1 border border-stone-200 bg-white px-3 py-2 text-sm text-stone-800 outline-none transition-colors focus:border-earth-terra focus:ring-2 focus:ring-earth-terra/20"
                    />
                    <button
                      type="button"
                      onClick={() => markCheckedNow(item.id)}
                      className="border border-stone-300 bg-white px-3 py-2 text-xs tracking-widest text-stone-600 transition-colors hover:border-earth-terra hover:text-earth-terra"
                    >
                      今日
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div>
                  <p className="text-[11px] tracking-widest text-stone-400">MEMO</p>
                  <textarea
                    value={item.notes}
                    onChange={(event) => updateCandidate(item.id, 'notes', event.target.value)}
                    rows={3}
                    className="mt-2 w-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm leading-loose text-stone-700 outline-none transition-colors focus:border-earth-terra focus:ring-2 focus:ring-earth-terra/20"
                  />
                </div>
              </div>

              {item.extractedNames.length > 0 && (
                <div className="mt-5">
                  <p className="text-[11px] tracking-widest text-stone-400">EXTRACTED NAMES</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.extractedNames.map((name) => (
                      <span key={name} className="border border-stone-200 bg-stone-50 px-3 py-1 text-sm text-stone-700">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Issue15AuditPage;
