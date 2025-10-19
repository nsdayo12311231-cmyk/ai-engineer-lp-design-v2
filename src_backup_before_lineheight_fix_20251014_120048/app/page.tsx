import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ProblemSolution from '../components/sections/ProblemSolution';
import Reviews from '../components/sections/Reviews';
import Strengths from '../components/sections/Strengths';
import Interview from '../components/sections/Interview';
import FAQ from '../components/sections/FAQ';
import Story from '../components/sections/Story';
import CTAButton from '../components/ui/CTAButton';

export default function Home() {
  return (
    <>
      {/* ヘッダー */}
      <Header />

      <main className="pt-0">
        {/* 1. ファーストビュー */}
        <Hero />

        {/* CTA 1 */}
        <CTAButton />

        {/* 2. 問題提起〜解決方法 */}
        <ProblemSolution />

        {/* 3. 口コミ */}
        <Reviews />

        {/* CTA 2 */}
        <CTAButton />

        {/* 4. 強み */}
        <Strengths />

        {/* 5. インタビュー */}
        <Interview />

        {/* 6. Q&A */}
        <FAQ />

        {/* 7. ストーリーパート */}
        <Story />

        {/* CTA 3 */}
        <CTAButton />

        {/* 会社情報 */}
        <section className="section-spacing bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center">
              <h3 className="text-h3 text-gray-900 mb-2">株式会社SKH</h3>
              <p className="text-base text-text-secondary">
                大阪府吹田市千里山東2-4-3
              </p>
            </div>
          </div>
        </section>

        {/* フッター */}
        <Footer />
      </main>
    </>
  );
}
