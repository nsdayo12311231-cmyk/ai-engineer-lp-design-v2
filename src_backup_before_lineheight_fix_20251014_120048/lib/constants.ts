import { HeroPattern, Feature, Portfolio, FAQ } from '../types';

export const HERO_PATTERNS: HeroPattern[] = [
  {
    id: 'A',
    headline: 'このまま一生、低単価のまま？',
    subheadline: '3ヶ月で単価5倍を狙える"AIエンジニアスキル"を、無料セミナーで限定公開',
  },
  {
    id: 'B',
    headline: 'たった3ヶ月で、単価5倍に!?',
    subheadline: 'AIスキルで"安定収入と最強キャリア"を手に入れる方法、特別セミナー開催',
  },
  {
    id: 'C',
    headline: '低単価案件はもういやだ！',
    subheadline: '3ヶ月で単価5倍を狙える"AIエンジニアスキル"を特別セミナーで大公開',
  },
];

export const FEATURES: Feature[] = [
  {
    number: '01',
    title: '実践重視カリキュラム',
    description: 'コンテンツを見るだけでなく「手を動かす」ことに徹底フォーカス。自分の業務に直結したAIツールを開発しながら学べる',
    icon: '🛠️',
  },
  {
    number: '02',
    title: '高い自由度と応用力',
    description: '自分の業務改善から始め、社内・社外へと展開できる。「使える人」ではなく「成果を生み出す人」になれる',
    icon: '🔄',
  },
  {
    number: '03',
    title: 'キャリアに直結するスキル',
    description: '一時的な副業や資格に終わらず、社内で頼られる人材に。転職や独立などキャリアの可能性が大きく広がる',
    icon: '🚀',
  },
];

export const PORTFOLIOS: Portfolio[] = [
  {
    id: '1',
    title: 'AIサポートアシスタント',
    description: 'オンライン相談との連携',
    duration: 'Week 2-3 (2週間集中開発)',
    image: '/images/portfolio-1.jpg',
  },
  {
    id: '2',
    title: 'リアルタイム在庫管理アプリ',
    description: 'Week 7 (1週間集中開発)',
    duration: 'Week 7 (1週間集中開発)',
    image: '/images/portfolio-2.jpg',
  },
  {
    id: '3',
    title: '社内ナレッジ共有システム',
    description: 'Week 7-8 (10日間)',
    duration: 'Week 7-8 (10日間)',
    image: '/images/portfolio-3.jpg',
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'プログラミング未経験でも参加できますか？',
    answer: 'はい、大丈夫です。本講座は基礎から始め、課題を通じて実際にツールを作りながら学ぶスタイルなので、未経験の方でも安心して取り組めます。',
  },
  {
    question: 'どれくらいの時間を確保すれば良いですか？',
    answer: '週に3〜5時間程度の学習を目安にしてください。週1回の質問会や週2回の実践会に参加すれば、着実にスキルを定着できます。',
  },
  {
    question: '仕事や家庭と両立できますか？',
    answer: 'はい。オンライン学習＋コミュニティ型なので、隙間時間でも進められます。実践会や質問会も録画やアーカイブで確認できます。',
  },
  {
    question: '受講後にどんなスキルが身につきますか？',
    answer: '自分や社内で使えるAIツールを開発できるスキルが身につきます。業務効率化はもちろん、社内での価値向上やキャリアアップにつながります。',
  },
  {
    question: '本当に無料ですか？',
    answer: 'はい、説明会の参加は完全無料です。強引な勧誘なども一切ありませんので、安心してご参加ください。',
  },
];