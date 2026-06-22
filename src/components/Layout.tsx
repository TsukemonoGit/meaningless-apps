import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          {isHome ? (
            <h1 className="header-title">役に立たないミニアプリ集</h1>
          ) : (
            <Link to="/" className="back-button">
              ← ホームに戻る
            </Link>
          )}
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
