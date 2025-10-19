import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3ヶ月で副業単価5倍！AIエンジニアスキル無料セミナー | 株式会社SKH',
  description: 'AIを作れる人材になって副業単価を劇的アップ。実践型カリキュラムで3ヶ月で成果を実感。無料セミナー開催中！',
  keywords: 'AI,エンジニア,副業,プログラミング,スキルアップ,セミナー',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: '3ヶ月で副業単価5倍！AIエンジニアスキル無料セミナー',
    description: 'AIを作れる人材になって副業単価を劇的アップ',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4166939246851263');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4166939246851263&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-noto">{children}</body>
    </html>
  );
}
