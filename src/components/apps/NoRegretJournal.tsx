import { useState } from 'react';

const journalEntries: { date: string; text: string }[] = [];

export default function NoRegretJournal() {
  type JournalEntry = { date: string; text: string };
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem('no-regret-journal');
      return saved ? JSON.parse(saved) : journalEntries;
    } catch {
      return journalEntries;
    }
  });
  const [input, setInput] = useState('');

  const addEntry = () => {
    if (!input.trim()) return;
    const newEntry = {
      date: new Date().toLocaleString('ja-JP'),
      text: input,
    };
    const newEntries = [newEntry, ...entries];
    setEntries(newEntries);
    localStorage.setItem('no-regret-journal', JSON.stringify(newEntries));
    setInput('');
  };

  return (
    <div className="app-container">
      <h2>反省しない日記</h2>
      <p className="app-description">反省なし。書き放題。全て正当化されます。</p>
      <div className="journal-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="今日のことを書く（反省は書かない）"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addEntry();
          }}
        />
        <button className="action-button" onClick={addEntry}>
          書き込む
        </button>
      </div>
      {entries.length > 0 && (
        <div className="journal-entries">
          <h3>日記</h3>
          {entries.map((entry, index) => (
            <div key={index} className="journal-entry">
              <div className="journal-date">{entry.date}</div>
              <div className="journal-text">{entry.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
