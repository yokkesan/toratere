function Live() {
  return (
    <section className="p-live">

      <div className="p-live__inner">

        {/* 上：ライブ配信 */}
        <div className="p-live__top">

          <div className="p-live__header">
            <span className="p-live__icon"></span>
            <h2 className="p-live__title">ライブ配信</h2>
          </div>

          <div className="p-live__buttons">
            <button className="p-live__btn">SGLカメラ①（音声無し）</button>
            <button className="p-live__btn">SGLカメラ②（音声無し）</button>
            <button className="p-live__btn">阪神タイガースVS読売ジャイアンンツ</button>
          </div>

          <div className="p-live__link">
            複数同時視聴 →
          </div>

        </div>

        {/* 下：カード */}
        <div className="p-live__bottom">

          <div className="p-live__card">
            <span className="p-live__card-icon"></span>
            <span>スコアボード</span>
            <span className="p-live__arrow">→</span>
          </div>

          <div className="p-live__card">
            <span className="p-live__card-icon"></span>
            <span>試合速報</span>
            <span className="p-live__arrow">→</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Live