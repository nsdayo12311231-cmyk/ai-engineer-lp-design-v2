import React from 'react';
import Container from '../ui/Container';

export default function ProblemSolution() {
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
        <Step1 />
        <Step2 highlightText={highlightText} />
        <Summary />
        <Step3 highlightText={highlightText} />
        <Step4 highlightText={highlightText} />
        <Step5 highlightText={highlightText} />
        <Step6 highlightText={highlightText} />
        <Step7 highlightText={highlightText} />
        <Step8 highlightText={highlightText} />
      </Container>
    </section>
  );
}

function Step1() {
  const problems = [
    '案件を取っても単価が安すぎる',
    '本業＋副業で時間ばかり奪われる',
    '頑張っているのに収入もキャリアも積み上がらない'
  ];

  return (
    <div style={{
      backgroundColor: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '16px',
      padding: '40px',
      margin: '40px 0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontWeight: 'bold',
        fontSize: 'clamp(20px, 5vw, 24px)',
        textAlign: 'center',
        marginBottom: '32px'
      }}>
        こんな悩みありませんか？
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
        {problems.map((problem, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: index < problems.length - 1 ? '15px' : '0',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            <span style={{ color: '#ef4444', fontSize: '20px', marginRight: '12px' }}>❌</span>
            <span>{problem}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step2({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ margin: '60px 0' }}>
      <h2 style={{
        fontSize: 'clamp(22px, 5vw, 28px)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        その悩みは<span style={{ color: '#ff3131' }}>あなただけではありません</span>
      </h2>
      <p style={{ fontSize: '20px', textAlign: 'center', marginBottom: '40px' }}>なぜなら...</p>
      
      <ReasonBox number="①" title="収入の現実" content={
        <>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>副業をしている人の</p>
          <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#ff3131', margin: '20px 0' }}>約40%</p>
          <p style={{ fontSize: '18px' }}>が<span style={{ color: '#ff3131' }}>月5万円未満</span>の収入しか得られていません</p>
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <div style={{ marginBottom: '10px' }}>💰 月収5万円未満 ────── 40%</div>
            <div style={{ background: 'linear-gradient(to right, #ef4444 40%, #e5e7eb 40%)', height: '30px', borderRadius: '4px', marginBottom: '10px' }} />
            <div>💰 月収5万円以上 ────── 60%</div>
          </div>
          <p style={{ fontSize: '16px', color: '#6b7280' }}>💡 10人中4人が満足な収入を得られていない</p>
        </>
      } />

      <ReasonBox number="②" title="単価の低さ" content={
        <>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>さらにその40%のうちの</p>
          <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#ff3131', margin: '20px 0' }}>約40%</p>
          <p style={{ fontSize: '18px' }}>が単価が低く<span style={{ color: '#ff3131' }}>消耗</span>しています</p>
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>月5万円未満の人(40%)の中で</p>
            <div style={{ marginBottom: '10px' }}>😰 低単価で消耗 ──── 40%</div>
            <div style={{ marginBottom: '10px', fontSize: '14px', color: '#6b7280' }}>(時給換算すると500円以下)</div>
            <div style={{ marginBottom: '10px' }}>😊 適正単価 ──────── 60%</div>
            <div style={{ background: 'linear-gradient(to right, #ef4444 40%, #e5e7eb 40%)', height: '30px', borderRadius: '4px' }} />
          </div>
          <p style={{ fontSize: '16px', color: '#6b7280' }}>💡 副業者全体の16%が低単価で苦しんでいる</p>
        </>
      } />

      <ReasonBox number="③" title="時間が奪われる" content={
        <>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>やっと案件が取れても...</p>
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>低単価案件の悪循環</h4>
            <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
              <div style={{ marginBottom: '10px' }}>📌 単価が低い</div>
              <div style={{ marginBottom: '10px', marginLeft: '20px' }}>↓</div>
              <div style={{ marginBottom: '10px' }}>⏰ 長時間働く必要がある</div>
              <div style={{ marginBottom: '10px', marginLeft: '20px' }}>↓</div>
              <div style={{ marginBottom: '10px' }}>😫 <span style={{ color: '#ff3131', fontWeight: 'bold' }}>時間だけが過ぎていく</span></div>
              <div style={{ marginBottom: '10px', marginLeft: '20px' }}>↓</div>
              <div style={{ marginBottom: '10px' }}>💸 財布はいつまで経っても潤わない</div>
              <div style={{ marginBottom: '10px', marginLeft: '20px' }}>↓</div>
              <div>🔄 また低単価案件を探す...</div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>例えば...</p>
            <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
              <p>時給1,000円 → 月20万稼ぐには200時間必要</p>
              <p>時給5,000円 → 月20万稼ぐには40時間でOK</p>
              <p style={{ color: '#ff3131', fontWeight: 'bold' }}>差は 160時間/月 (1日5時間以上の差！)</p>
            </div>
          </div>
        </>
      } />

      <ReasonBox number="④" title="副業経験がキャリアに直結しない" content={
        <>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>経験はあるはずなのに...</p>
          <div style={{ backgroundColor: '#f3f4f6', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>❌ こんな状況に陥っています</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: 1.8 }}>
              <li style={{ marginBottom: '10px' }}>・独立以外にスキルを<span style={{ color: '#ff3131', fontWeight: 'bold' }}>生かす術を知らない</span></li>
              <li style={{ marginBottom: '10px' }}>・転職でアピールできない</li>
              <li style={{ marginBottom: '10px' }}>・社内で評価されない</li>
              <li>・スキルアップの道筋が見えない</li>
            </ul>
          </div>
          <div style={{ backgroundColor: '#e7f5ff', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>本来、副業経験は...</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: 1.8 }}>
              <li style={{ marginBottom: '10px' }}>✅ 転職で有利になる</li>
              <li style={{ marginBottom: '10px' }}>✅ 社内で昇進のチャンス</li>
              <li style={{ marginBottom: '10px' }}>✅ 独立の選択肢も持てる</li>
              <li>✅ 収入の柱が増える</li>
            </ul>
          </div>
          <p style={{ fontSize: '16px', color: '#6b7280' }}>💡 でも、低単価案件ではこれらのメリットを得られません...</p>
        </>
      } />
    </div>
  );
}

function ReasonBox({ number, title, content }: { number: string; title: string; content: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#1e3a5f', color: 'white', padding: '30px', borderRadius: '12px', margin: '30px 0' }}>
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>理由{number} {title}</h3>
      <div>{content}</div>
    </div>
  );
}

function Summary() {
  return (
    <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '60px 0' }}>
      このようにたくさんの人が副業に同じようなことを感じています
    </p>
  );
}

function Step3({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '40px', borderRadius: '12px', margin: '60px 0', textAlign: 'center' }}>
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>ここで一つ質問させてください</h3>
      <p style={{ fontSize: 'clamp(18px, 4vw, 22px)', lineHeight: 1.8 }}>
        {highlightText('もし、【高単価スキル】の習得ができればこの問題【全て解決できる】と思いませんか？')}
      </p>
    </div>
  );
}

function Step4({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#ff6b35', color: 'white', padding: '40px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
      <p style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 'bold', lineHeight: 1.8 }}>
        {highlightText('当講座の【AIエンジニアスキル】を身につけることで')}
      </p>
      <p style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 'bold', marginTop: '20px' }}>それが可能になります！</p>
    </div>
  );
}

function Step5({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ margin: '60px 0' }}>
      <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '30px', borderRadius: '12px 12px 0 0', textAlign: 'center' }}>
        <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 'bold' }}>エンジニアって聞くと難しく感じますよね</h3>
      </div>
      <div style={{ backgroundColor: 'white', border: '2px solid #e5e7eb', borderTop: 'none', padding: '30px', borderRadius: '0 0 12px 12px' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
          それは<span style={{ color: '#ff3131' }}>大きな間違い</span>です
        </p>
        <div style={{ backgroundColor: '#e7f5ff', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 'bold', lineHeight: 1.8 }}>
            {highlightText('AIを組み合わせることで【初心者でもシステム開発】ができるようになります')}
          </p>
        </div>
      </div>
    </div>
  );
}

function Step6({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ margin: '60px 0' }}>
      <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
        そもそもAIエンジニアスキルとは？
      </h2>
      <div style={{ backgroundColor: 'white', border: '2px solid #e5e7eb', padding: '40px', borderRadius: '12px' }}>
        <p style={{ fontSize: '20px', textAlign: 'center', marginBottom: '20px' }}>
          エンジニアになる上で絶対に欠かせない<br />「コードを書くという作業」を
        </p>
        <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff3131', textAlign: 'center', margin: '30px 0' }}>AIで完結します</p>
        <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '30px' }}>それによって...</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#e7f5ff', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {highlightText('✅ コードや難しいプログラミング言語を【覚える必要がない】')}
            </p>
          </div>
          <div style={{ backgroundColor: '#e7f5ff', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {highlightText('✅ コードを書く時間や勉強する時間を【短縮できる】')}
            </p>
          </div>
          <div style={{ backgroundColor: '#e7f5ff', padding: '20px', borderRadius: '8px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{highlightText('✅ 【初心者でもチャレンジ可能】に！')}</p>
          </div>
        </div>
        <p style={{ fontSize: '18px', textAlign: 'center', marginTop: '40px', lineHeight: 1.8 }}>
          それにより、初心者であっても、既存のエンジニアよりも早く、<br />システム開発ができるようになります！
        </p>
      </div>
    </div>
  );
}

function Step7({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ margin: '60px 0' }}>
      <div style={{ backgroundColor: '#1f2937', color: 'white', padding: '30px', borderRadius: '12px 12px 0 0', textAlign: 'center' }}>
        <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 'bold' }}>
          あなたが社長ならどちらのエンジニアと仕事がしたいですか
        </h3>
      </div>
      <div style={{ backgroundColor: 'white', border: '2px solid #e5e7eb', borderTop: 'none', padding: '40px', borderRadius: '0 0 12px 12px' }}>
        <div style={{ backgroundColor: '#f3f4f6', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>1️⃣ 1ヶ月かけてシステム開発をするエンジニア</p>
        </div>
        <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: '20px 0' }}>VS</p>
        <div style={{ backgroundColor: '#fff3cd', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            {highlightText('2️⃣ AIを活用し、通常のエンジニアよりも【5倍以上早く】システム完成させるエンジニア')}
          </p>
        </div>
        <p style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center', marginTop: '30px' }}>答えは明白ですよね？</p>
      </div>
    </div>
  );
}

function Step8({ highlightText }: { highlightText: (text: string) => React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#ff6b35', color: 'white', padding: '40px', borderRadius: '12px', margin: '60px 0', textAlign: 'center' }}>
      <p style={{ fontSize: 'clamp(18px, 4vw, 20px)', lineHeight: 1.8, marginBottom: '30px' }}>
        もうすでにAIを活用し、AIエンジニアとして活躍する人材が増えてきていますが
      </p>
      <p style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 'bold', marginBottom: '30px' }}>
        {highlightText('【まだ間に合います】')}
      </p>
      <p style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 'bold', lineHeight: 1.8 }}>
        {highlightText('【手遅れになる前に】、AIエンジニアが増える前に')}
      </p>
      <p style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 'bold', marginTop: '20px' }}>
        {highlightText('【先行者利益をつかみましょう】！')}
      </p>
    </div>
  );
}
