'use client';

import React from 'react';
import Container from '../ui/Container';

interface Review {
  id: number;
  photo: string;
  age: string;
  occupation: string;
  catchphrase: string;
  content: string;
  name: string;
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      photo: '/placeholder-avatar.png',
      age: '30代男性',
      occupation: '元営業マン',
      catchphrase: '営業から転身して人生変わりました',
      content: '営業を10年やってきましたが、毎日飛び込み営業で体力的にも精神的にも限界でした。給料も上がらず、このままでいいのかと悩んでいた時にこの講座を知りました。\n\n正直、プログラミングなんて自分には無理だと思っていました。でも、AIがコードを書いてくれるので、【3ヶ月で簡単なシステム】が作れるようになってびっくりしました。\n\n今は副業で【月15万円】稼げていて、営業時代より時給が高いです。転職も視野に入れて動いています。',
      name: '田中太郎様（35歳・営業職）'
    },
    {
      id: 2,
      photo: '/placeholder-avatar.png',
      age: '40代女性',
      occupation: '主婦',
      catchphrase: '子育てしながら月20万円稼げるなんて！',
      content: '子供が小学生になって、少し時間ができたので在宅でできる仕事を探していました。でも、データ入力とかライターの仕事は【時給に換算すると500円】くらいで、割に合わないなと感じていました。\n\n難しそうだなと思いながらも受講してみたら、思ったより簡単でした。AIが手伝ってくれるので、プログラミングの知識がなくても大丈夫でした。\n\n今は企業から直接お仕事をもらえるようになって、【月20万円】稼げています。家にいながらこんなに稼げるとは思っていませんでした。',
      name: '佐藤花子様（42歳・主婦）'
    },
    {
      id: 3,
      photo: '/placeholder-avatar.png',
      age: '20代男性',
      occupation: '会社員',
      catchphrase: '半信半疑だったけど本当にできました',
      content: '会社で頑張っても給料が上がらず、転職したいけど特別なスキルもない...そんな状態でした。\n\n友人に勧められて受講したんですが、最初は半信半疑でした。でも、実際にやってみると【初心者の自分でもちゃんとシステムが作れて】驚きました。\n\n今は会社の業務でも使えるツールを作ったりして、上司から評価されるようになりました。副業でも【月10万円】くらい稼げていて、貯金も増えてきました。\n\n転職活動でもアピールできるスキルができて、自信がつきました。',
      name: '山田一郎様（28歳・会社員）'
    }
  ];

  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '60px 16px' }}>
      <Container>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          受講生の声
        </h2>
        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '40px'
        }}>
          AIエンジニア講座を受講して人生が変わった先輩にお話を聞きました！
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} isEven={index % 2 === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ReviewCard({ review, isEven }: { review: Review; isEven: boolean }) {
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
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'flex-start'
      }}
      className="review-card-responsive">
        <div style={{
          minWidth: '150px',
          textAlign: 'center',
          flexShrink: 0
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#e5e7eb',
            margin: '0 auto 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px'
          }}>
            👤
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '5px 0' }}>{review.age}</p>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: '5px 0' }}>{review.occupation}</p>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            {review.catchphrase}
          </div>
          <div style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: '#374151',
            whiteSpace: 'pre-line'
          }}>
            {highlightText(review.content)}
          </div>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            marginTop: '16px',
            textAlign: 'right'
          }}>
            {review.name}
          </p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .review-card-responsive {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}
