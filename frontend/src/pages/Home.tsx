import MainLayout from '../layouts/MainLayout'
import Search from './home/Search'
import Movie from './home/Movie'
import Live from './home/Live'
import News from './home/News'
import Videos from './home/Videos'
import Ranking from './home/Ranking'
import About from './home/About'

function Home() {
  return (
    <MainLayout>
      <Search />
      <Movie />
      <Live />
      <News />
      <Videos />
      <Ranking />
      <About />
    </MainLayout>
  )
}

export default Home