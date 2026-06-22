import { useState, useEffect } from 'react';

const calendarResponses = [
  'その予定、無理です。',
  'キャンセルしました（していません）',
  '予定を無視しました。',
  'その予定、ありません。',
  '予定は応援しておりません。',
  'スケジュール空いてません（本当は空いてます）',
  'その日はお休みです（していません）',
  '予定を取り消しました（していません）',
  'その予定、別の日にしてください。',
  '予定を削除しました（していません）',
  'カレンダーに「なし」と表示されました。',
  'その予定、ありませんでした。',
  '応援しておりませんのでご了承ください。',
  '予定はあくまで予定です。',
  'その予定、無理無理。',
];

interface CalendarItem {
  date: string;
  event: string;
  response: string;
}

export default function UnsupportingCalendar() {
  const [items, setItems] = useState<CalendarItem[]>(() => {
    try {
      const saved = localStorage.getItem('unsupporting-calendar');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');

  useEffect(() => {
    localStorage.setItem('unsupporting-calendar', JSON.stringify(items));
  }, [items]);

  const addEvent = () => {
    if (!date || !event.trim()) return;
    const response = calendarResponses[Math.floor(Math.random() * calendarResponses.length)];
    setItems((prev) => [{ date, event, response }, ...prev]);
    setDate('');
    setEvent('');
  };

  const sortedItems = [...items].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="app-container">
      <h2>予定を応援しないカレンダー</h2>
      <p className="app-description">予定を入れても、冷たくあしらいます。</p>
      <div className="calendar-input">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="予定を入力"
        />
        <button className="action-button" onClick={addEvent}>
          予定を追加
        </button>
      </div>
      {sortedItems.length > 0 && (
        <div className="calendar-list">
          <h3>応援されない予定一覧</h3>
          {sortedItems.map((item, index) => (
            <div key={index} className="calendar-item">
              <div className="calendar-date">{item.date}</div>
              <div className="calendar-event">
                <span className="event-text">{item.event}</span>
                <span className="event-response">{item.response}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
