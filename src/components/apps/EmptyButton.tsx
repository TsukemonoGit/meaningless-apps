import { useState } from 'react';

const emptinessMessages = [
  '虚無...',
  '何も起きなかった',
  'ボタンは押されたが、何も返さない',
  '空虚な響き',
  'ボタンの奥に広がる無限の虚空',
  '押す前と何も変わらない',
  '虚空が虚空を噛む',
  '何もない、という事実',
  '押しても押しても何もない',
  '虚空の彼方から聞こえてくるもの',
  '無からの帰還',
  'このボタンは何も約束しない',
  '虚空の訪れ',
  '押すほどに深まる虚無',
  '返事がない返事',
];

export default function EmptyButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <h2>虚無ボタン</h2>
      <p className="app-description">このボタンを押しても、何も起きません。</p>
      <div className="app-center">
        <button className="emptiness-button" onClick={handleClick}>
          虚無を押す
        </button>
        {count > 0 && (
          <p className="emptiness-result">
            {emptinessMessages[count % emptinessMessages.length]}
          </p>
        )}
      </div>
    </div>
  );
}
