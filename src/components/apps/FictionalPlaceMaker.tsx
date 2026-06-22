import { useState } from 'react';

const placePrefixes = [
  '小野', '大森', '古河', '新田', '富士見', '鶴ヶ', '龍ヶ', '星の', '月の', '雲の',
  '風早', '雪原', '海老名', '桜木', '梅田', '柳橋', '竹下', '松本', '柏原', '岡本',
  '伊達', '佐方', '箱根', '湯河原', '鴨川', '鮎瀬', '鵜の', '鯨波', '鳥海', '鹿島',
];

const placeSuffixes = [
  '町', '村', '市', '峠', '浜', '津', '瀬', '谷', '原', '野',
  '塚', '石', '橋', '窪', '沢', '渕', '木', '林', '山', '岱',
];

export default function FictionalPlaceMaker() {
  const [places, setPlaces] = useState<string[]>([]);

  const generatePlace = () => {
    const prefix = placePrefixes[Math.floor(Math.random() * placePrefixes.length)];
    const suffix = placeSuffixes[Math.floor(Math.random() * placeSuffixes.length)];
    const newPlace = `${prefix}${suffix}`;
    setPlaces((prev) => [newPlace, ...prev].slice(0, 10));
  };

  return (
    <div className="app-container">
      <h2>架空地名メーカー</h2>
      <p className="app-description">存在しない地名を生成します。</p>
      <div className="app-center">
        <button className="action-button" onClick={generatePlace}>
          地名を生成
        </button>
      </div>
      {places.length > 0 && (
        <div className="place-list">
          <h3>生成された地名</h3>
          <ul>
            {places.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
