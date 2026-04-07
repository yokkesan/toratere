import { useState } from 'react'
import img1 from '../../assets/images/videos/movie_banner01.jpg'
import img2 from '../../assets/images/videos/movie_banner02.jpg'
import img3 from '../../assets/images/videos/movie_banner03.jpg'
import img4 from '../../assets/images/videos/movie_banner04.jpg'

function Videos() {
  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < videos.length - visibleCount) {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <section className="p-videos">
      <div className="p-videos__inner">

        {/* タイトル */}
        <div className="p-videos__header">
          <h2 className="p-videos__title">特典映像</h2>
          <div className="p-videos__more">すべて見る →</div>
        </div>

        {/* スライダー */}
        <div className="p-videos__wrap">

          {/* 左：初期非表示 */}
          <button
            className="p-videos__arrow p-videos__arrow--prev"
            onClick={prev}
            style={{ display: index === 0 ? 'none' : 'flex' }}
          >
            ‹
          </button>

          {/* 右 */}
          <button
            className="p-videos__arrow p-videos__arrow--next"
            onClick={next}
            style={{ display: index >= videos.length - visibleCount ? 'none' : 'flex' }}
          >
            ›
          </button>

          <div className="p-videos__viewport">
            <div
              className="p-videos__list"
              style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
            >
              {videos.map((v) => (
                <div className="p-videos__item" key={v.id}>
                  <div className="p-videos__thumb">
                    <img src={v.image} alt="" />
                    <div className="p-videos__play">▶</div>
                  </div>

                  <p className="p-videos__name">{v.title}</p>
                  <p className="p-videos__date">{v.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Videos


const visibleCount = 3

type Video = {
  id: number
  image: string
  title: string
  date: string
}

const videos: Video[] = [
  { id: 1, image: img1, title: 'Tigers Inside - 「不変」 -', date: '2026年04月06日' },
  { id: 2, image: img2, title: '2/25　具志川 - 手締め -', date: '2026年02月25日' },
  { id: 3, image: img3, title: '2/25　具志川 - 内野守備練習 -', date: '2026年02月25日' },
  { id: 4, image: img4, title: '2/25　具志川 - 捕手 -', date: '2026年02月25日' }
]