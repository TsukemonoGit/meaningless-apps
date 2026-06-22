import { useState } from 'react';

const choices = [
  { left: '朝起きる', right: '夜更かしする' },
  { left: 'コーヒー', right: '紅茶' },
  { left: '猫', right: '犬' },
  { left: '雪', right: '雨' },
  { left: 'カレー', right: 'パエリア' },
  { left: 'ハンバーグ', right: 'ステーキ' },
  { left: 'ゲーム', right: 'アニメ' },
  { left: '読書', right: '映画' },
  { left: '山', right: '海' },
  { left: '春', right: '秋' },
  { left: '昼', right: '夜' },
  { left: '甘いもの', right: '辛いもの' },
  { left: '朝ご飯', right: '夜ご飯' },
  { left: '一人', right: '誰かと' },
  { left: '家', right: '外' },
  { left: 'スマホ', right: 'PC' },
  { left: '音楽聴きながら', right: '無音で' },
  { left: '早起き', right: '寝坊' },
  { left: '片付け', right: '放置' },
  { left: '即返信', right: '未読スルー' },
];

export default function IrrelevantChoice() {
  const [current, setCurrent] = useState(choices[0]);
  const [selected, setSelected] = useState<string | null>(null);

  const randomChoice = () => {
    const shuffled = [...choices].sort(() => Math.random() - 0.5);
    setCurrent(shuffled[0]);
    setSelected(null);
  };

  const handleSelect = (side: 'left' | 'right') => {
    setSelected(side);
  };

  return (
    <div className="app-container">
      <h2>どうでもいい二択</h2>
      <p className="app-description">どうでもいい選択肢に答えましょう。</p>
      <div className="choice-container">
        <div className="choice-buttons">
          <button
            className={`choice-button left ${selected === 'left' ? 'selected' : ''}`}
            onClick={() => handleSelect('left')}
          >
            {current.left}
          </button>
          <span className="choice-vs">VS</span>
          <button
            className={`choice-button right ${selected === 'right' ? 'selected' : ''}`}
            onClick={() => handleSelect('right')}
          >
            {current.right}
          </button>
        </div>
        <div className="app-center">
          <button className="action-button" onClick={randomChoice}>
            新しい二択
          </button>
        </div>
      </div>
    </div>
  );
}
