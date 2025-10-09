# デザイン更新用プロジェクト

## 📁 プロジェクト情報

- **作成日**: 2025-10-09
- **コピー元**: `ai-engineer-lp` (2025-10-03時点の最新版)
- **目的**: デザイン変更の安全な実施

## 🎯 このフォルダの用途

既存のプロジェクトを壊さずに、デザイン変更を試行・実装するための専用環境です。

## 📋 含まれる機能（コピー元の状態）

### 実装済みセクション
- ✅ Hero (ファーストビュー)
- ✅ Problems (共感パート)
- ✅ Solution (解決策提示)
- ✅ AiSkillDefinition (AIスキル定義)
- ✅ WhyAiSkill (必要性の説明)
- ✅ OtherSeminars (他セミナーとの違い)
- ✅ SeminarBenefits (セミナー内容)
- ✅ SpecialOffers (参加者特典)
- ✅ CTA (最終行動喚起)
- ✅ FixedCTA (固定CTAボタン)

### 技術仕様
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- 静的エクスポート (output: 'export')

### 最適化済み項目
- PNG→JPEG画像変換（86%軽量化）
- 画像プリロード（fetchpriority）
- レスポンシブフォント（clamp関数）
- 90%幅統一レイアウト

## 🚀 開発サーバーの起動方法

```bash
cd /Users/nakamursuguru/LP3/ai-engineer-lp-design-update-20251009
npm run dev
```

ブラウザで http://localhost:3000 にアクセス

## 📝 デザイン変更の記録

### 変更予定項目
- [ ] （ここに変更内容を記録）

### 変更履歴
- 2025-10-09: プロジェクト作成

## ⚠️ 注意事項

1. **このフォルダで自由に変更可能**
   - 元の`ai-engineer-lp`フォルダは影響を受けません
   - 失敗しても元のプロジェクトは安全です

2. **変更完了後の統合**
   - デザイン変更が完了したら、元のプロジェクトに反映するか判断
   - または、このフォルダを新しいメインプロジェクトとして使用

3. **開発サーバー起動時の注意**
   - 元の`ai-engineer-lp`の開発サーバーと同時起動しないこと
   - ポート3000が競合するため

## 🔗 関連プロジェクト

- **オリジナル**: `/Users/nakamursuguru/LP3/ai-engineer-lp`
- **Pattern 2**: `/Users/nakamursuguru/LP3/ai-engineer-lp-pattern2`
- **Pattern 3**: `/Users/nakamursuguru/LP3/ai-engineer-lp-pattern3`

---

*作成者: Claude Code*
*最終更新: 2025-10-09*
