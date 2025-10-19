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
    <section style={{ backgroundColor: '#f9fafb', padding: '30px 16px' }}>
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
          marginBottom: '20px'
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
            lineHeight: 1.5,
            marginBottom: '15px'
          }}>
            {highlightText(
              '私たちは、【AI画像生成スクール】を運営している株式会社SKHです。\n\n「現実を変える」をコンセプトに、月収10万円を稼げるスクールを2021年から運営してきました。'
            )}
          </p>

          {/* 私たちの歩み */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ff6b35',
            fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif"
          }}>
            私たちの歩み
          </h3>

          {/* エピソード1 */}
          <div style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>🌱</span>
              <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#ff6b35'
              }}>
                小さなスタートから
              </div>
            </div>
            <p style={{
              fontSize: '15px',
              color: '#374151',
              lineHeight: 1.6
            }}>
              2021年、私たちは「誰かの現実を変えたい」という想いだけでスクールをスタートしました。最初は数人の受講生から。試行錯誤の日々でした。
            </p>
          </div>

          {/* エピソード2 */}
          <div style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>💝</span>
              <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#ff6b35'
              }}>
                受講生の笑顔が原動力
              </div>
            </div>
            <p style={{
              fontSize: '15px',
              color: '#374151',
              lineHeight: 1.6
            }}>
              「初めて10万円稼げました」「会社を辞める勇気が持てました」そんな報告をいただくたびに、私たちの使命を再確認しました。
            </p>
          </div>

          {/* エピソード3 */}
          <div style={{ marginBottom: '20px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>🚀</span>
              <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#ff6b35'
              }}>
                次のステージへ
              </div>
            </div>
            <p style={{
              fontSize: '15px',
              color: '#374151',
              lineHeight: 1.6
            }}>
              そして今、私たちは確信しています。もっと多くの人の「人生そのもの」を変えられると。だからこそ、この講座を立ち上げました。
            </p>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: '15px'
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
            lineHeight: 1.5,
            marginBottom: '15px'
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
            lineHeight: 1.5,
            marginBottom: '15px'
          }}>
            月収10万円は達成できた。でも、その先を目指したい。<br />
            そんな声に応えるため、私たちは考えました。
          </p>

          {/* そして生まれたのが... */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ff6b35',
            fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif"
          }}>
            そして生まれたのが...
          </h3>

          <div style={{ marginBottom: '15px', textAlign: 'center' }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#374151'
            }}>
              「現実を変える」から
            </p>
            <p style={{
              fontSize: 'clamp(22px, 5vw, 28px)',
              fontWeight: 'bold',
              color: '#ff3131',
              marginBottom: '20px'
            }}>
              「人生を変える」へ。
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.5,
              color: '#374151'
            }}>
              {highlightText(
                'より【高単価に特化】した、【AIエンジニアスキル講座】です。'
              )}
            </p>
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: '15px'
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
            color: '#ff6b35',
            fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif"
          }}>
            この講座が目指すもの
          </h3>

          {/* カード1 */}
          <div style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>💰</span>
              <div style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#374151'
              }}>
                月収10万円ではなく、
              </div>
            </div>
            <p style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              color: '#ff6b35',
              fontWeight: 'bold',
              lineHeight: 1.3,
              margin: 0
            }}>
              年収1000万円以上
            </p>
          </div>

          {/* カード2 */}
          <div style={{ marginBottom: '25px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>📈</span>
              <div style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#374151'
              }}>
                単発の案件ではなく、
              </div>
            </div>
            <p style={{
              fontSize: '22px',
              color: '#ff6b35',
              fontWeight: 'bold',
              lineHeight: 1.3,
              margin: 0
            }}>
              継続的な収入
            </p>
          </div>

          {/* カード3 */}
          <div style={{ marginBottom: '20px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>🚀</span>
              <div style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#374151'
              }}>
                副業レベルではなく、
              </div>
            </div>
            <p style={{
              fontSize: '22px',
              color: '#ff6b35',
              fontWeight: 'bold',
              lineHeight: 1.3,
              margin: 0
            }}>
              転職・独立も可能
            </p>
          </div>

          {/* どうして私たちはこんなことができるのか？ */}
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ff6b35',
            fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif"
          }}>
            どうして私たちはこんなことができるのか？
          </h3>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: '15px'
          }}>
            それは、<span style={{ fontWeight: 'bold', color: '#1f2937' }}>現場で結果を出し続けてきた</span>実績があるからです。
            <br /><br />
            今回のセミナーでは、その秘訣を<span style={{ fontWeight: 'bold', color: '#1f2937' }}>包み隠さず公開</span>します。
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
          </div>
        </div>
      </Container>
    </section>
  );
}
