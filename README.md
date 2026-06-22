# inspired by ぺぇ

https://10-tiny-useless-tools.vercel.app/

[まとめたー](https://matometr.naczuki.workers.dev/naddr1qvzqqqr4gupzpq4np5cygstsu65vsx0ggphrv23kj4z553sh39xwyur08pqvdsqrqq3k6ct5dakk2arj95crzj6k29g4q4z5g3vrwkjnxp94wvpkf4g5w3zwfezspcngs7)

# つくった環境

Qwen3.6-35B-A3B-APEX-I-Compact + OpenCode

## 指示

React + Vite + TypeScriptで「役に立たないミニアプリ集」というWebアプリを作ってください。

概要：
意味はないが、押したり入力したりするとくだらない結果が返ってくるミニアプリを10個まとめたWebアプリです。

構成：

- ホーム画面にミニアプリ一覧をカード形式で表示
- 各カードを押すと、そのミニアプリ画面に遷移
- ヘッダーからホームに戻れる
- スマホでも見やすいレスポンシブ対応

入れるミニアプリ：

1. 虚無ボタン
2. 架空地名メーカー
3. 無意味称号メーカー
4. どうでもいい二択
5. 何もしないタイマー
6. 今日の存在報告
7. 反省しない日記
8. 予定を応援しないカレンダー
9. 謎のお告げガチャ
10. 概念変換機

条件：

- React
- Vite
- TypeScript
- React Routerを使う
- 外部APIは使わない
- データ保存が必要なものはlocalStorageを使う
- デザインはゆるいが、見た目は雑にしない
- 余白多め、カードUI中心
- npm install → npm run dev で起動できる状態にしてください

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
