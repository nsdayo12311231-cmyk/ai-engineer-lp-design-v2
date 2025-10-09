import React from 'react';
import Container from '../ui/Container';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'プログラミングとか全くわからないんですが本当に大丈夫ですか？',
      answer: '【ご心配ありません】。\n\n当講師も【全くの未経験】からシステムを完成させています。\n\nまたセミナーに参加することでその不安は解消されますのでぜひご参加し、【体験してください】。'
    },
    {
      id: 2,
      question: 'スキルを習得しても案件を獲得できる自信がありません',
      answer: '【ご安心ください】。\n\n案件を獲得するにも【ステップがあります】。\n\nステップを踏んだ上で案件獲得に乗り出すと【安定して高単価案件が獲得できる】ようになります。\n\nその具体的な方法をセミナーで詳しくお伝えします。'
    },
    {
      id: 3,
      question: 'フリーランスにはこだわっておらず、転職も考えています。そういった目的でも大丈夫ですか？',
      answer: '【全く心配ありません】。\n\nセミナーを聞いていただくと【むしろ転職の方が有利】ではないかと感じる人もいます。\n\n当セミナーを受けていただくことで【年収を上げることは簡単に感じる】はずです。'
    },
    {
      id: 4,
      question: '仕事や家事が忙しいのですが、学習時間を確保できるか不安です',
      answer: '【ご心配いりません】。\n\n受講生の【80%以上が働きながら】、または家事をしながら学習されています。\n\n【1日1〜2時間】の学習で十分成果が出ますし、AIがサポートしてくれるので【効率的にスキルが身につきます】。\n\n忙しい方でも無理なく続けられる方法をセミナーでご紹介します。'
    },
    {
      id: 5,
      question: '本当に無料ですか？後から高額な料金を請求されたりしませんか？',
      answer: '【ご安心ください】。\n\nセミナーは【完全無料】です。後から料金を請求することは一切ございません。\n\nなぜ無料でセミナーを開催するのか？それは、まず【AIエンジニアスキルの可能性】を多くの方に知っていただきたいからです。\n\nセミナー後に有料講座のご案内はございますが、受講するかどうかは【あなたの自由】です。強引な営業は一切行いませんので、安心してご参加ください。'
    }
  ];

  return (
    <section style={{ backgroundColor: 'white', padding: '60px 16px' }}>
      <Container>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          よくある質問
        </h2>

        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '40px'
        }}>
          あなたの不安を解消します
        </p>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQItem({ faq }: { faq: FAQItem }) {
  // 赤文字を適用する処理
  const highlightText = (text: string) => {
    return text.split(/(\【[^\】]+\】)/g).map((part, index) => {
      if (part.startsWith('【') && part.endsWith('】')) {
        return (
          <span key={index} style={{ color: '#ff3131', fontWeight: 'bold' }}>
            {part.replace(/【|】/g, '')}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div style={{
      marginBottom: '30px',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '30px'
    }}>
      {/* 質問 */}
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#1f2937'
      }}>
        Q. {faq.question}
      </h3>

      {/* 回答 */}
      <div style={{
        fontSize: '16px',
        lineHeight: 1.8,
        color: '#374151',
        paddingLeft: '20px',
        whiteSpace: 'pre-line'
      }}>
        A. {highlightText(faq.answer)}
      </div>
    </div>
  );
}
