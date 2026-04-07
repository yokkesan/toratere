import { useState } from 'react'
import newsLogo from '../../assets/images/news/news_banner.png'
import shopBanner from '../../assets/images/news/logo_2021.png'
import thumb1 from '../../assets/images/news/replica01.jpg'
import thumb2 from '../../assets/images/news/replica02.jpg'
import thumb3 from '../../assets/images/news/replica03.jpg'

function News() {
    const [index, setIndex] = useState(0)

    const next = () => {
        if (index < thumbs.length - 1) setIndex(index + 1)
    }

    const prev = () => {
        if (index > 0) setIndex(index - 1)
    }

    return (
        <section className="p-news">
            <div className="p-news__inner">

                <div className="p-news__info">
                    <h2 className="p-news__heading">現在のお知らせ</h2>

                    <div className="p-news__item">
                        <img src={newsLogo} alt="" className="p-news__logo" />

                        <div className="p-news__text-wrap">
                            <p className="p-news__date">2026.03.25</p>
                            <p className="p-news__text">
                                ホーム開幕3連戦の実況・解説について
                            </p>
                        </div>
                        <div className="p-news__text-wrap">
                            <p className="p-news__date">2026.03.31</p>
                            <p className="p-news__text">
                                試合中止のお知らせ
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-news__shop">
                    <div className="p-news__banner">
                        <img src={shopBanner} alt="" />
                    </div>

                    <div className="p-news__thumb-slider">
                        <button className="p-news__arrow p-news__arrow--prev" onClick={prev}>‹</button>
                        <button className="p-news__arrow p-news__arrow--next" onClick={next}>›</button>

                        <div className="p-news__viewport">
                            <div
                                className="p-news__list"
                                style={{ transform: `translateX(-${index * 100}%)` }}
                            >
                                {thumbs.map((thumb) => (
                                    <div className="p-news__slide" key={thumb.id}>
                                        <img src={thumb.image} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default News

type Thumb = {
    id: number
    image: string
}

const thumbs: Thumb[] = [
    { id: 1, image: thumb1 },
    { id: 2, image: thumb2 },
    { id: 3, image: thumb3 },
]