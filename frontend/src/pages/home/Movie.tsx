import { useState } from 'react'
import banner from '../../assets/images/movie/pc_banner.jpeg'

function Movie() {
  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < movies.length - 1) {
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <section className="p-movie">

      <button className="p-movie__arrow p-movie__arrow--prev" onClick={prev}>‹</button>

      <button className="p-movie__arrow p-movie__arrow--next" onClick={next}>›</button>

      <div className="p-movie__viewport">
        <div
          className="p-movie__list"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {movies.map((movie, i) => (
            <div
              className={`p-movie__item ${index === i ? 'is-active' : ''}`}
              key={movie.id}
            >
              <div className="p-movie__img-wrap">
                <img src={movie.image} alt={movie.title} />
              </div>

              <div className="p-movie__content">
                <p className="p-movie__sub">特典映像</p>
                <h2 className="p-movie__title">{movie.title}</h2>
                <button className="p-movie__btn">動画を見る</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-movie__dots">
        {movies.map((_, i) => (
          <button
            key={i}
            className={`p-movie__dot ${index === i ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </section>
  )
}

export default Movie

type MovieType = {
  id: number
  title: string
  image: string
}

const movies: MovieType[] = [
  { id: 1, title: '虎テレセレクト', image: banner },
  { id: 2, title: 'キャンプ特集', image: banner },
  { id: 3, title: '選手特集', image: banner },
  { id: 4, title: '試合ハイライト', image: banner }
]