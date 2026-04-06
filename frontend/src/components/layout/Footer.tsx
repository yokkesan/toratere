import logo from '../../assets/images/footer/logo.png'
import appstore from '../../assets/images/footer/badge_apple.png'
import googleplay from '../../assets/images/footer/badge_google.png'

function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-footer__inner">

        {/* 左 */}
        <div className="l-footer__left">

          <div className="l-footer__logo">
            <img src={logo} alt="虎テレ" />
          </div>

          <div className="l-footer__app">
            <a href="#">
              <img src={appstore} alt="App Store" />
            </a>
            <a href="#">
              <img src={googleplay} alt="Google Play" />
            </a>
          </div>

          <p className="l-footer__jasrac">
            JASRAC許諾番号 9026057001Y45040号
          </p>

        </div>

        {/* 中央 */}
        <div className="l-footer__center">

          <ul className="l-footer__nav">
            <li>特典映像</li>
            <li>日程</li>
            <li>熱狂メーター</li>
            <li>成績</li>
            <li>PDのタテ</li>
          </ul>

          <ul className="l-footer__nav">
            <li>虎テレとは</li>
            <li>Q&A・お問い合わせ</li>
          </ul>

        </div>

        {/* 右 */}
        <div className="l-footer__right">

          <ul className="l-footer__nav">
            <li>利用規約</li>
            <li>特定商取引法に関して</li>
            <li>個人情報保護方針</li>
          </ul>

          <p className="l-footer__copy">
            Copyright (C) HANSHIN Tigers.
          </p>

        </div>

        {/* 閉じる */}
        <button className="l-footer__close">×</button>

      </div>
    </footer>
  )
}

export default Footer