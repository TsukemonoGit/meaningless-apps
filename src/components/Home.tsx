import { Link } from 'react-router-dom';

const apps = [
  { id: 'empty-button', name: '虚無ボタン', desc: '何もしないボタン', emoji: '⬛' },
  { id: 'place-maker', name: '架空地名メーカー', desc: '存在しない地名を生成', emoji: '🗺️' },
  { id: 'title-maker', name: '無意味称号メーカー', desc: '意味のない称号を授与', emoji: '🏷️' },
  { id: 'choice', name: 'どうでもいい二択', desc: 'どうでもよい選択肢', emoji: '⚖️' },
  { id: 'timer', name: '何もしないタイマー', desc: 'ただ時間を経過させる', emoji: '⏱️' },
  { id: 'existence-report', name: '今日の存在報告', desc: 'あなたの存在を報告', emoji: '📋' },
  { id: 'journal', name: '反省しない日記', desc: '反省しない日記を付けよう', emoji: '📔' },
  { id: 'calendar', name: '予定を応援しないカレンダー', desc: '予定を冷たく無視する', emoji: '📅' },
  { id: 'gacha', name: '謎のお告げガチャ', desc: '意味不明なお告げ', emoji: '🔮' },
  { id: 'converter', name: '概念変換機', desc: '概念を変換する機械', emoji: '⚙️' },
];

export default function Home() {
  return (
    <div className="home">
      <h2 className="home-title">ミニアプリ一覧</h2>
      <div className="card-grid">
        {apps.map((app) => (
          <Link key={app.id} to={`/${app.id}`} className="app-card">
            <div className="app-card-emoji">{app.emoji}</div>
            <div className="app-card-title">{app.name}</div>
            <div className="app-card-desc">{app.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
