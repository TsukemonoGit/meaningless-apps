import { useState, useEffect } from 'react';

export default function DoNothingTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="app-container">
      <h2>何もしないタイマー</h2>
      <p className="app-description">ただ時間だけを計測します。他に何もしません。</p>
      <div className="app-center">
        <div className="timer-display">{formatTime(seconds)}</div>
        <div className="timer-controls">
          {!isRunning ? (
            <button className="action-button" onClick={handleStart}>
              開始
            </button>
          ) : (
            <button className="action-button" onClick={handleStop}>
              停止
            </button>
          )}
          <button className="reset-button" onClick={handleReset}>
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}
