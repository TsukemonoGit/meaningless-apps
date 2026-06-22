import { useState } from 'react';

const reportTemplates = [
  '本日のあなたの存在度: {score}%',
  `本日のあなたの活動量: {activity}`,
  '本日のあなたの価値: {value}',
  '本日のあなたの評価: {rating}',
  '本日のあなたの貢献度: {contribution}',
];

const activities = ['うたた寝', '窓を見る', '息をする', '何もしない', '深呼吸', 'スマホをいじる', 'ぼーっとする', 'ため息をつく', '天井を見る', '風を感じる'];
const values = ['非常に低い', 'まあまあ低い', '普通', '少し高い', 'とても高い', '計測不能', '定義不能', '無意味', '測定不能', 'ゼロ'];
const ratings = ['A（最悪）', 'B（悪い）', 'C（普通）', 'D（まあまあ）', 'F（何ともいえない）', '∞（測定不能）', 'Null', 'Error', '未評価', '無'];
const contributions = ['なし', '微量', 'ゼロ', '確認不能', '否定', '無視', '存在しない', '0', '-', '…'];

export default function TodayExistenceReport() {
  const [report, setReport] = useState('');

  const generateReport = () => {
    const score = Math.floor(Math.random() * 101);
    const template = reportTemplates[Math.floor(Math.random() * reportTemplates.length)]
      .replace('{score}', String(score))
      .replace('{activity}', activities[Math.floor(Math.random() * activities.length)])
      .replace('{value}', values[Math.floor(Math.random() * values.length)])
      .replace('{rating}', ratings[Math.floor(Math.random() * ratings.length)])
      .replace('{contribution}', contributions[Math.floor(Math.random() * contributions.length)]);
    setReport(template);
  };

  return (
    <div className="app-container">
      <h2>今日の存在報告</h2>
      <p className="app-description">本日のあなたの存在を報告します。</p>
      <div className="app-center">
        <button className="action-button" onClick={generateReport}>
          報告する
        </button>
        {report && (
          <div className="report-result">
            <p className="report-text">{report}</p>
          </div>
        )}
      </div>
    </div>
  );
}
