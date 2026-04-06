function Search() {
    return (
        <div className="l-search">

            {/* 上：検索バー */}
            <div className="l-search__top">
                <div className="l-search__inner">

                    <div className="l-search__box">
                        <span className="l-search__label">動画検索</span>

                        <input
                            type="text"
                            className="l-search__input"
                            placeholder="ホームラン　三振　キャンプなど"
                        />

                        <button className="l-search__btn">
                            🔍
                        </button>
                    </div>

                </div>
            </div>

            {/* 下：人気キーワード */}
            <div className="l-search__bottom">
                <div className="l-search__inner">

                    <div className="l-search__keywords">
                        <span className="l-search__keywords-label">
                            人気の検索ワード
                        </span>

                        <ul className="l-search__keywords-list">
                            <li>Tigers Inside</li>
                            <li>猛虎キャンプリポート</li>
                            <li>早出特守</li>
                            <li>快足</li>
                            <li>特守</li>
                            <li>宜野座</li>
                        </ul>

                        <button className="l-search__more">
                            ＋ 詳しく検索する
                        </button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Search