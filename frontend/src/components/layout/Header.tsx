import logo from '../../assets/images/header/logo.png'

function Header() {
  return (
    <header className="l-header">
      <div className="l-header__bg">
        <div className="l-header__inner">

          {/* 左：ロゴ */}
          <div className="l-header__left">
            <a href="/" className="l-header__logo">
              <div className="l-header__logo-img">
                <img src={logo} alt="虎テレ" />
              </div>
              <span className="l-header__logo-text">
                阪神タイガース公式動画配信サービス
              </span>
            </a>
          </div>

          {/* 中央：ナビ */}
          <nav className="l-header__nav">
            <ul className="l-header__list">
              <li>特典映像</li>
              <li>日程</li>
              <li>熱狂メーター</li>
              <li>成績</li>
              <li>PDのタテ</li>
              <li>虎テレとは</li>
            </ul>
          </nav>

          {/* 右：ボタン */}
          <div className="l-header__btn-area">
            <button className="l-header__login">ログイン</button>
            <button className="l-header__entry">新規会員登録</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header