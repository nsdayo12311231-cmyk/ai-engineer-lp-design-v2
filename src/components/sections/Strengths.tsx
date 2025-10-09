import React from 'react';
import Container from '../ui/Container';

export default function Strengths() {
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '60px 16px' }}>
      <Container>
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 32px)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          なぜこんな事例をポンポン出せるのか？
        </h2>

        {/* 実績紹介 */}
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '40px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <p style={{
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '30px',
            lineHeight: 1.8
          }}>
            実は当社は<span style={{ color: '#ff3131', fontWeight: 'bold' }}>AI画像生成スクール</span>を<br />
            運営しておりました
          </p>

          {/* 実績ボックス */}
          <div style={{
            backgroundColor: '#1e3a5f',
            color: 'white',
            padding: '30px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: '20px'
            }}>
              <div>
                💰 年商<span style={{ color: '#ff3131', fontSize: '28px', fontWeight: 'bold' }}>3億円</span>達成
              </div>
              <div>
                👥 受講生<span style={{ color: '#ff3131', fontSize: '28px', fontWeight: 'bold' }}>1,000人超</span>
              </div>
              <div>
                ✅ <span style={{ color: '#ff3131', fontSize: '28px', fontWeight: 'bold' }}>3人に1人</span>が<br />
                   <span style={{ color: '#ff3131', fontSize: '28px', fontWeight: 'bold' }}>月収10万円達成</span>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            textAlign: 'center'
          }}>
            そんな実績ある当社が第2弾として<br />
            「現実を変える」→<span style={{ color: '#ff3131', fontWeight: 'bold' }}>「人生を変える」</span><br />
            より<span style={{ color: '#ff3131', fontWeight: 'bold' }}>高単価に特化</span>したスクールを<br />
            立ち上げました
          </p>
        </div>

        {/* セミナーの特別性 */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            今回のセミナーでは<br />
            そのロードマップを<span style={{ color: '#ff3131' }}>特別に大公開</span>！
          </p>

          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginTop: '20px'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#ff3131',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
              ⚠️ この情報は【今日を逃すと】【もう二度と表示されません】
            </p>
            <p style={{
              fontSize: '18px',
              color: '#ff3131',
              fontWeight: 'bold'
            }}>
              ⚠️ また【定員に達し次第締め切り】させていただきます
            </p>
          </div>

          <p style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '20px'
          }}>
            👉 <span style={{ color: '#ff3131' }}>いますぐ</span>セミナーの日程を予約してください
          </p>
        </div>
      </Container>
    </section>
  );
}
