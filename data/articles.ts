import { Article } from '../types';

export type JournalArticle = Article & {
  href: string;
};

export const journalArticles: JournalArticle[] = [
  {
    id: '1',
    title: '瀬戸内の光と影。アートが教えてくれる「見る」ことの豊かさ。',
    category: 'Art',
    tags: ['アート', '旅', '視覚'],
    image: 'https://picsum.photos/id/1040/800/1000',
    excerpt: '直島の美術館で出会ったのは、静寂の中に浮かび上がる光のアートでした。',
    date: '2023.10.15',
    href: 'https://example.com/sensoria-journal/1',
  },
  {
    id: '2',
    title: 'なぜ、そのクリームに癒やされるのか。肌が喜ぶ「触り心地」の秘密。',
    category: 'Beauty',
    tags: ['美容', 'スキンケア', '触覚'],
    image: 'https://picsum.photos/id/360/800/1000',
    excerpt: '高機能なだけではない。指先が触れた瞬間に心がほどける、テクスチャの魔法について。',
    date: '2023.10.22',
    href: 'https://example.com/sensoria-journal/2',
  },
  {
    id: '3',
    title: '記憶を呼び覚ます香り。旅先で出会った一生モノのパフューム。',
    category: 'Travel',
    tags: ['旅', '美容', '嗅覚'],
    image: 'https://picsum.photos/id/292/800/1000',
    excerpt: '異国のスパイス市場で出会った香りは、今でも鮮明に旅の記憶を蘇らせてくれます。',
    date: '2023.10.30',
    href: 'https://example.com/sensoria-journal/3',
  },
  {
    id: '4',
    title: '朝の静寂を取り戻す、10分間の「聴覚」デトックス。',
    category: 'Lifestyle',
    tags: ['ライフスタイル', '聴覚'],
    image: 'https://picsum.photos/id/19/800/600',
    excerpt: '通知に追われる朝を手放し、音の余白を取り戻す小さな習慣。',
    date: '2023.11.05',
    href: 'https://example.com/sensoria-journal/4',
  },
  {
    id: '5',
    title: '現代アートと食の融合。味覚を刺激する新しいレストラン体験。',
    category: 'Art',
    tags: ['アート', '食', '味覚'],
    image: 'https://picsum.photos/id/431/800/600',
    excerpt: '料理を鑑賞し、アートを味わう。感性が交差するテーブルの記録。',
    date: '2023.11.02',
    href: 'https://example.com/sensoria-journal/5',
  },
  {
    id: '6',
    title: '週末、スマホを置いて森へ行く。デジタルデトックスのすすめ。',
    category: 'Travel',
    tags: ['旅', '自然'],
    image: 'https://picsum.photos/id/28/800/600',
    excerpt: '森の匂いと風の音に身を置くことで、思考は驚くほど整っていく。',
    date: '2023.10.28',
    href: 'https://example.com/sensoria-journal/6',
  },
];
