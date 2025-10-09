import React from 'react';
import Container from '../ui/Container';

export default function Interview() {
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
    <section style={{ backgroundColor: 'white', padding: '60px 16px' }}>
      <Container>
        {/* ヘッダー */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            letterSpacing: '2px',
            marginBottom: '8px'
          }}>
            STUDENT INTERVIEW
          </p>
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            受講生インタビュー
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280'
          }}>
            AIエンジニア講座を受講して<br />
            人生が変わった先輩にお話を聞きました！
          </p>
        </div>

        {/* インタビュー対象者情報 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px'
          }}>
            👤
          </div>
          <div>
            <p style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
              田中太郎さん（35歳）
            </p>
            <p style={{
              fontSize: '16px',
              color: '#6b7280'
            }}>
              2024年受講<br />
              元営業職 → AIエンジニア
            </p>
          </div>
        </div>

        {/* Q1 */}
        <QuestionBlock
          number="1"
          question="受講前の状況を教えてください"
          answer={`営業を10年やってきましたが、毎日飛び込み営業で体力的にも精神的にも限界でした。給料も上がらず、このままでいいのかと悩んでいました。転職したいけど【特別なスキルがない】...そんな時にこの講座を知りました。\n\n最初は「プログラミングなんて無理」と思っていましたが、【AIがコードを書いてくれる】と聞いて、これなら自分でもできるかもと思い受講を決意しました。`}
          highlightText={highlightText}
        />

        {/* Q2 */}
        <QuestionBlock
          number="2"
          question="受講後の変化を教えてください"
          answer={`受講して【3ヶ月後には簡単なシステム】が作れるようになっていました。正直、自分でも驚きました。\n\n今は副業で【月15万円】稼げていて、営業時代の3倍の時給です。クライアントから「すごく助かる」と言ってもらえて、営業時代にはなかった【達成感】があります。\n\n転職活動も始めていて、すでに2社から内定をもらいました。`}
          highlightText={highlightText}
        />

        {/* Q3 */}
        <QuestionBlock
          number="3"
          question="どんな人におすすめですか？"
          answer={`正直、【今の仕事に不安がある人】なら誰にでもおすすめです。プログラミング経験がなくても、AIがサポートしてくれるので大丈夫です。\n\n特に、副業で収入を増やしたい人、転職を考えている人には本当におすすめです。【人生が変わる】きっかけになると思います。`}
          highlightText={highlightText}
        />
      </Container>
    </section>
  );
}

function QuestionBlock({
  number,
  question,
  answer,
  highlightText
}: {
  number: string;
  question: string;
  answer: string;
  highlightText: (text: string) => React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: '40px' }}>
      {/* 質問 */}
      <div style={{
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          margin: 0
        }}>
          Q{number}. {question}
        </h3>
      </div>

      {/* 回答 */}
      <div style={{
        fontSize: '16px',
        lineHeight: 1.8,
        color: '#374151',
        paddingLeft: '20px',
        whiteSpace: 'pre-line'
      }}>
        {highlightText(answer)}
      </div>
    </div>
  );
}
