import { useState } from 'react';

const oracleMessages = [
  '今日、何か失うことがあります（していません）',
  '思いがけぬ出会いが...', 'ええ、もう？', 'まあいいでしょう',
  'その選択、正解です（間違いです）', '無理です', '諦めましょう',
  '待っててください', 'まだです', 'いいえ', 'はい（いいえ）',
  '50/50です', '不明です', '確認できません', '占いエラー',
  '星々があなたを無視しています', '宇宙の法則は無関係です',
  '今日はギャンブル禁止（していません）', '金運：底',
  '健康運：まあまあ', '爱情運：なし', '学業運：どうでもいい',
  '仕事運：無視', '旅行運：行かなくていい', '家事運：放置',
  '運動運：無理', '創作運：止めて', '社交運：断ります',
  '午後に悪いことが...', '何も起きません', '大丈夫（大丈夫じゃない）',
  'なんとかなります（ならない）', '気にしないで', 'それでいい',
];

export default function MysteriousOracleGacha() {
  const [oracle, setOracle] = useState('');
  const [spinning, setSpinning] = useState(false);

  const pullGacha = () => {
    setSpinning(true);
    setOracle('');
    setTimeout(() => {
      const message = oracleMessages[Math.floor(Math.random() * oracleMessages.length)];
      setOracle(message);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="app-container">
      <h2>謎のお告げガチャ</h2>
      <p className="app-description">意味不明なお告げが得られます。</p>
      <div className="app-center">
        <button
          className="action-button gacha-button"
          onClick={pullGacha}
          disabled={spinning}
        >
          {spinning ? '占い中...' : 'お告げを引く'}
        </button>
        {oracle && (
          <div className="oracle-result">
            <p className="oracle-text">{oracle}</p>
          </div>
        )}
      </div>
    </div>
  );
}
