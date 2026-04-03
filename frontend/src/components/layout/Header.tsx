function Header() {
  return (
    <header className="header">
      <div className="header__inner">

        <div className="header__logo">
          TORATELE
        </div>

        <nav className="header__nav">
          <ul>
            <li>特典映像</li>
            <li>日程</li>
            <li>熱狂メーター</li>
            <li>成績</li>
          </ul>
        </nav>

        <div className="header__actions">
          <button>ログイン</button>
          <button>新規登録</button>
        </div>

      </div>
    </header>
  )
}

export default Header