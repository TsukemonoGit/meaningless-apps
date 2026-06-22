import { useState } from 'react';

const conversionPairs = [
  { input: '猫', output: 'PDFファイル' },
  { input: '感情', output: 'Excelデータ' },
  { input: '夢', output: 'DNSサーバー' },
  { input: '愛', output: 'キャッシュ' },
  { input: '時間', output: 'USBケーブル' },
  { input: '思い出', output: '圧縮ファイル' },
  { input: '青春', output: 'ドライバ' },
  { input: '未来', output: 'Cookie' },
  { input: '哲学', output: 'ブルーカーペット' },
  { input: '詩', output: 'レジ袋' },
  { input: '宇宙', output: 'トースター' },
  { input: '魂', output: 'メモリカード' },
  { input: '運命', output: 'ハロウィン' },
  { input: '歴史', output: 'Bluetooth' },
  { input: '自然', output: 'スクリプト' },
];

const randomOutputs = [
  'DNSサーバー', 'PDFファイル', 'Excelデータ', 'キャッシュ', 'USBケーブル',
  '圧縮ファイル', 'ドライバ', 'Cookie', 'ブルーカーペット', 'レジ袋',
  'トースター', 'メモリカード', 'ハロウィン', 'Bluetooth', 'スクリプト',
  'ミサンガ', 'ティッシュ', '風船', '石鹸', '乾電池',
];

export default function ConceptConverter() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState<{ input: string; output: string }[]>([]);

  const convert = () => {
    if (!input.trim()) return;

    const pair = conversionPairs.find(
      (p) => p.input === input.trim()
    );

    let output: string;
    if (pair) {
      output = pair.output;
    } else {
      output = randomOutputs[Math.floor(Math.random() * randomOutputs.length)];
    }

    setResult(output);
    setHistory((prev) => [{ input: input.trim(), output }, ...prev].slice(0, 10));
  };

  return (
    <div className="app-container">
      <h2>概念変換機</h2>
      <p className="app-description">概念を入力すると、意味不明なものに変換されます。</p>
      <div className="converter-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="変換したい概念を入力"
          onKeyDown={(e) => {
            if (e.key === 'Enter') convert();
          }}
        />
        <button className="action-button" onClick={convert}>
          変換
        </button>
      </div>
      {result && (
        <div className="converter-result">
          <p>
            「{input}」→ 「{result}」
          </p>
        </div>
      )}
      {history.length > 0 && (
        <div className="converter-history">
          <h3>変換履歴</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                「{item.input}」→「{item.output}」
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
