import { useState } from 'react';

const titlePrefixes = [
  '世界の', '宇宙一の', '伝説の', '謎の', '不滅の', '終焉の', '永遠の', '混沌の',
  '虚無の', '狂気の', '聖なる', '不浄の', '暗黒の', '曙光の', '氷結の', '焔の',
  '鉄の', '鋼の', '風の', '雷の', '夢見る', '眠れる', '覚めぬ', '砕けた',
];

const titleNouns = [
  '魔人', '勇者', '騎士', '巫女', '賢者', '戦鬼', '影法師', '幻想家', '夢喰い',
  '虚無旅', '星詠み', '月読', '風達人', '波乗り', '岩隠れ', '雲浮き', '氷刻み',
  '炎焚び', '雷鳴主', '霧隠れ', '鏡使い', '鏡師', '帳場', '番人', '看取り',
];

const titleSuffixes = [
  'No.000', '改', '零', '弐', '参', '壱', '終', '始', '極', '命',
];

export default function MeaninglessTitleMaker() {
  const [title, setTitle] = useState('');

  const generateTitle = () => {
    const prefix = titlePrefixes[Math.floor(Math.random() * titlePrefixes.length)];
    const noun = titleNouns[Math.floor(Math.random() * titleNouns.length)];
    const suffix = titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)];
    const newTitle = `${prefix}${noun}${suffix}`;
    setTitle(newTitle);
  };

  return (
    <div className="app-container">
      <h2>無意味称号メーカー</h2>
      <p className="app-description">あなたにふさわしい称号を授与します。</p>
      <div className="app-center">
        <button className="action-button" onClick={generateTitle}>
          称号を授与
        </button>
        {title && (
          <div className="title-result">
            <p className="title-label">おまえの称号は...</p>
            <p className="title-value">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
