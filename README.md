# frontend-base

###  このレポジトリを作成した背景
- 新規プロジェクト開始時にWebフロントエンド開発環境をゼロから構築するのに時間がかかる。
- 他プロジェクトを流用すれば効率化できるが、進化が速いWebフロントエンド分野において持続可能ではない。

### レポジトリの目的
- 新規フロントエンドプロジェクトの開発を迅速に開始できるように、環境構築の工数を削減するためのベース環境を提供する。
- 進化が速いWebフロントエンド分野において、現在の流行や状況に合わせたベース環境を提供するために持続的にメンテナンスできるようにする。
  - フィードバックを歓迎します。欲しい環境や改善点などがあれば、Discussionに投稿していただけると幸いです。

### ベースとして実装するもの
- コード整形
- リンター
- 再利用可能なコンポーネント（ボタン、等）
  - コンポーネントライブラリの利用したものやライブラリに依存しないコンポーネントなど利用用途に合わせて提供
- APIモック環境
- テスト基盤

### 利用する(したい)フレームワーク
- React（+ Vite）
- Next.js
- Astro
- Svelte
- Remix

### TODO
- Next.js/Astro/Svelte/Remixを使ったWebフロント開発ベース環境の提供
- レポジトリの使用方法やセットアップガイド記載
- レポジトリに含まれるコンポーネントや機能の説明
- レポジトリのバージョン管理や更新履歴の運用方法の確立
- コーディングガイドライン提供

### developブランチの状態（2024年9月現在）
- フレームワーク：React＋Vite（クライアントサイドレンダリング）
- フォーマッター/リンター：設定済み（biome）
- APIモック環境：設定済み（mock service worker）
- テスト基盤：設定済み（vitest）
- コンポーネント：ボタンやテキストボックスなど主要なコンポーネントは実装済み

## フロントエンドフレームワークの要件対応表（ざっくり）

| フレームワーク | SEOが重要 | 静的コンテンツが多い | 動的コンテンツが多い | インタラクティブ性が高い | パフォーマンスが重要 |
|----------------------|------------|-------------------|-------------------|---------------------|-------------------| 
| Next.js | ◯ |  | ◯ | ◯ | ◯ | 
| Astro | ◯ | ◯ |  | | ◯ | 
| Remix | ◯ |  | ◯ | ◯ | ◯ | 
| SvelteKit | ◯ | | ◯ | ◯ | ◯ | 
| React+Vite（CSR） |  | ◯ | | ◯ | ◯ | 
