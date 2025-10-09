import React from 'react';
import Container from '../ui/Container';

export default function Story() {
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
    <section style={{ backgroundColor: '#f9fafb', padding: '60px 16px' }}>
      <Container>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          なぜこの講座を作ったのか？
        </h2>

        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '40px'
        }}>
          〜私たちの想い〜
        </p>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {/* About */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#3b82f6'
          }}>
            About
          </h3>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            {highlightText(
              '私たちは、【AI画像生成スクール】を運営している株式会社SKHです。\n\n「現実を変える」をコンセプトに、月収10万円を稼げるスクールを2021年から運営してきました。'
            )}
          </p>

          {/* これまでの実績 */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#3b82f6'
          }}>
            これまでの実績
          </h3>

          <div style={{
            backgroundColor: '#1e3a5f',
            color: 'white',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              fontSize: '18px'
            }}>
              <div>
                💰 年商<span style={{ color: '#ff3131', fontSize: '24px', fontWeight: 'bold' }}>3億円</span>達成
              </div>
              <div>
                👥 受講生<span style={{ color: '#ff3131', fontSize: '24px', fontWeight: 'bold' }}>1,000人超</span>
              </div>
              <div>
                ✅ <span style={{ color: '#ff3131', fontSize: '24px', fontWeight: 'bold' }}>3人に1人</span>が<span style={{ color: '#ff3131', fontSize: '24px', fontWeight: 'bold' }}>月収10万円達成</span>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            {highlightText(
              '特に嬉しいのは、受講生の【3人に1人】が【月収10万円を達成】できたこと。多くの方の「現実を変える」お手伝いができました。'
            )}
          </p>

          {/* それから... */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#3b82f6'
          }}>
            それから...
          </h3>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            スクールを運営する中で、多くの受講生からこんな声をいただきました。
          </p>

          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              「もっと高単価な案件を取りたい」
            </p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              「転職や独立も視野に入れたい」
            </p>
            <p style={{ fontSize: '16px', margin: 0 }}>
              「人生そのものを変えたい」
            </p>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            月収10万円は達成できた。でも、その先を目指したい。<br />
            そんな声に応えるため、私たちは考えました。
          </p>

          {/* そして生まれたのが... */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#3b82f6'
          }}>
            そして生まれたのが...
          </h3>

          <div style={{
            backgroundColor: '#fef3c7',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
              「現実を変える」から
            </p>
            <p style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#ff3131',
              marginBottom: '20px'
            }}>
              「人生を変える」へ。
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.8
            }}>
              {highlightText(
                'より【高単価に特化】した、【AIエンジニアスキル講座】です。'
              )}
            </p>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            {highlightText(
              'AI画像生成で培ったノウハウと、最新のAI技術を組み合わせることで、【初心者でも高単価案件が取れる】スキルを身につけられる講座を作り上げました。'
            )}
          </p>

          {/* この講座が目指すもの */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#3b82f6'
          }}>
            この講座が目指すもの
          </h3>

          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '16px',
              lineHeight: 2
            }}>
              <li>
                ・月収10万円ではなく、<span style={{ color: '#ff3131', fontWeight: 'bold' }}>月収20〜30万円</span>
              </li>
              <li>
                ・単発の案件ではなく、<span style={{ color: '#ff3131', fontWeight: 'bold' }}>継続的な収入</span>
              </li>
              <li>
                ・副業レベルではなく、<span style={{ color: '#ff3131', fontWeight: 'bold' }}>転職・独立も可能</span>
              </li>
            </ul>
          </div>

          <p style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            {highlightText(
              'つまり、「現実」ではなく【「人生」を変える】レベルのスキルを提供します。'
            )}
          </p>

          {/* どうして私たちはこんなことができるのか？ */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#3b82f6'
          }}>
            どうして私たちはこんなことができるのか？
          </h3>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            {highlightText(
              'それは、【1,000人以上の受講生】を指導してきた実績と、【年商3億円】を達成したノウハウがあるからです。\n\n今回のセミナーでは、そのロードマップを【特別に大公開】します。'
            )}
          </p>

          {/* 緊急性の訴求 */}
          <div style={{
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#ff3131',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              ⚠️ この情報は【今日を逃すと】【もう二度と表示されません】
            </p>
            <p style={{
              fontSize: '18px',
              color: '#ff3131',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              ⚠️ また【定員に達し次第締め切り】させていただきます
            </p>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              あなたの「人生を変える」第一歩を、<br />
              <span style={{ color: '#ff3131' }}>いますぐ</span>踏み出してください。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
