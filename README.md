## 概要
下記技術スタックをお試しで学習したレポジトリ。

## 技術スタック
各技術スタックで確認できること
- React.js ver18
  - Suspence
  - ErrorBoundery
- Next.js ver14
  - app router
  - page, layout.tsx
- NextAuth / Auth0
  - Auth0に登録されたユーザーで認証・認可ができる。Auth0のコンソールからMFAの設定ができ、2要素認証できる
- trpcとTanstack Query v5
  - Integrateして、fetchできる

## 環境構築
1. node@ver20 npm@ver10 のinstall

```
npm run env:init
```

2. DBコンテナ起動
```
docker compose up -d
```

3. migration
```
npm run db:init
npm run db:migrate
npm run db:push
```

4. Auth0にアカウント登録し、env-templateを参考に環境変数を設定
https://auth0.auth0.com/u/login

5. サーバー起動
```
npm run dev
```

## TODO
Radix UIには今今提供されていないコンポネント(SideMenu, Appbar)はMuiで代用した。
=> 公式が出たらそちらに移行したい