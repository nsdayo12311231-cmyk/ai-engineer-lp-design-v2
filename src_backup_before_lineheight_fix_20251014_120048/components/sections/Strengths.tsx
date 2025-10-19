import React from 'react';
import Container from '../ui/Container';

export default function Strengths() {
  return (
    <section style={{ backgroundColor: 'white', padding: '60px 16px' }}>
      <Container>
        <h2 style={{
          fontSize: 'clamp(32px, 6vw, 44px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '50px',
          fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif"
        }}>
          なぜ私たちが教えられるのか
        </h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* ストーリー導入 */}
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '30px',
            borderRadius: '12px',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: '#1f2937',
              marginBottom: '20px'
            }}>
              私たちは<span style={{ color: '#ff6b35', fontWeight: 'bold' }}>AI画像生成スクール</span>を運営し、<br />
              多くの方の成功をサポートしてきました。
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#4b5563'
            }}>
              最初は小さなスタートでした。<br />
              しかし、受講生の皆様の熱意と、<br />
              私たちの丁寧なサポートが実を結び、<br />
              次第に大きな成果へと繋がっていきました。
            </p>
          </div>

          {/* 実績カード */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px 30px',
            borderRadius: '12px',
            marginBottom: '40px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}>
            {/* 実績1 */}
            <div style={{ marginBottom: '35px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '32px' }}>💰</span>
                <div style={{
                  fontSize: 'clamp(22px, 4vw, 26px)',
                  fontWeight: 'bold',
                  color: '#ff6b35'
                }}>
                  年商3億円達成
                </div>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                受講生の皆様にご支持いただき、安定した運営を続けています
              </p>
            </div>

            {/* 実績2 */}
            <div style={{ marginBottom: '35px', paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '32px' }}>👥</span>
                <div style={{
                  fontSize: 'clamp(22px, 4vw, 26px)',
                  fontWeight: 'bold',
                  color: '#ff6b35'
                }}>
                  受講生1,000人超
                </div>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                多くの方が「現実を変える」ことに成功しました
              </p>
            </div>

            {/* 実績3 */}
            <div style={{ paddingLeft: '20px', borderLeft: '4px solid #ff6b35' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '32px' }}>✅</span>
                <div style={{
                  fontSize: 'clamp(22px, 4vw, 26px)',
                  fontWeight: 'bold',
                  color: '#ff6b35'
                }}>
                  3人に1人が月収10万円達成
                </div>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#6b7280',
                lineHeight: 1.6
              }}>
                確かなカリキュラムと丁寧なサポートによる成果です
              </p>
            </div>
          </div>

          {/* つなぎ文 */}
          <div style={{
            textAlign: 'center',
            padding: '30px 20px',
            marginBottom: '40px'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: '#1f2937',
              fontWeight: '500',
              marginBottom: '25px'
            }}>
              そして何より私たちが誇りに思うのは、<br />
              受講生の皆様の<span style={{ color: '#ff6b35', fontWeight: 'bold' }}>「現実が変わった」</span>という声です。
            </p>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#4b5563'
            }}>
              この成功を見て、私たちは確信しました。<br />
              より高単価なスキルを身につけることで、<br />
              さらに多くの方の人生を変えられると。
            </p>
          </div>

          {/* 新スクール紹介 */}
          <div style={{
            background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 100%)',
            padding: '40px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            marginBottom: '40px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}>
            <p style={{
              fontSize: 'clamp(20px, 4vw, 24px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.8
            }}>
              そこで第2弾として、<br />
              より<span style={{ color: '#ff6b35' }}>高単価に特化した</span><br />
              AIエンジニアスクールを立ち上げました
            </p>
          </div>

          {/* ロードマップ公開 */}
          <div style={{
            background: 'linear-gradient(135deg, #ff8c42 0%, #ff6b35 50%, #d4a574 100%)',
            padding: '60px 20px',
            margin: '60px 0',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            textAlign: 'center'
          }}>
            {/* 案B: 実績連動型（推奨・デフォルト） */}
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 22px)',
              fontWeight: '500',
              color: 'white',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              そして今回のセミナーでは、
            </div>
            <div style={{
              fontSize: 'clamp(22px, 4.5vw, 28px)',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.6,
              marginBottom: '15px'
            }}>
              年商3億円、受講生1,000人超の<br />
              実績を生んだ
            </div>
            <div style={{
              fontSize: 'clamp(20px, 4vw, 26px)',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.6,
              marginBottom: '15px'
            }}>
              このスクールのロードマップを
            </div>
            <div style={{
              fontSize: 'clamp(32px, 6vw, 44px)',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.4,
              fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif"
            }}>
              特別に大公開します
            </div>

            {/* 案A: 希少性強調型
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 22px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.8,
              marginBottom: '15px'
            }}>
              そして今回のセミナーでは、
            </div>
            <div style={{
              fontSize: 'clamp(19px, 3.8vw, 24px)',
              fontWeight: 'bold',
              color: '#ff6b35',
              lineHeight: 1.6,
              marginBottom: '10px'
            }}>
              【通常は受講生のみに公開している】
            </div>
            <div style={{
              fontSize: 'clamp(20px, 4vw, 26px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.6,
              marginBottom: '10px'
            }}>
              このスクールのロードマップを
            </div>
            <div style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              fontWeight: 'bold',
              color: '#ff6b35',
              lineHeight: 1.6
            }}>
              今回限り特別に大公開します
            </div>
            */}

            {/* 案C: ベネフィット明示型
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 22px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.8,
              marginBottom: '15px'
            }}>
              そして今回のセミナーでは、
            </div>
            <div style={{
              fontSize: 'clamp(20px, 4vw, 26px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.6,
              marginBottom: '10px'
            }}>
              このスクールで使用している<br />
              ロードマップを大公開
            </div>
            <div style={{
              fontSize: 'clamp(22px, 4.5vw, 28px)',
              fontWeight: 'bold',
              color: '#ff6b35',
              lineHeight: 1.6
            }}>
              あなたも高単価AIエンジニアへの<br />
              最短ルートを知ることができます
            </div>
            */}

            {/* 案D: 緊迫感型
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 22px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.8,
              marginBottom: '15px'
            }}>
              そして今回のセミナーでは、
            </div>
            <div style={{
              fontSize: 'clamp(20px, 4vw, 26px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.6,
              marginBottom: '10px'
            }}>
              AI市場が飽和する前に<br />
              高単価ポジションを確保するための
            </div>
            <div style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              fontWeight: 'bold',
              color: '#ff6b35',
              lineHeight: 1.6
            }}>
              ロードマップを特別に大公開します
            </div>
            */}

            {/* 案E: シンプル強調型
            <div style={{
              fontSize: 'clamp(18px, 3.5vw, 22px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.8,
              marginBottom: '15px'
            }}>
              そして今回のセミナーで、
            </div>
            <div style={{
              fontSize: 'clamp(20px, 4vw, 26px)',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: 1.6,
              marginBottom: '10px'
            }}>
              このスクールのロードマップを
            </div>
            <div style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              fontWeight: 'bold',
              color: '#ff6b35',
              lineHeight: 1.6
            }}>
              【完全公開】します
            </div>
            */}
          </div>
        </div>
      </Container>
    </section>
  );
}
