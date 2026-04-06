import MainLayout from '../layouts/MainLayout'
import Search from './home/Search'
import Hero from './home/Hero'
import Live from './home/Live'
import News from './home/News'
import Videos from './home/Videos'
import Ranking from './home/Ranking'
import About from './home/About'

function Home() {
  return (
    <MainLayout>
      <Search />
      <Hero />
      <Live />
      <News />
      <Videos />
      <Ranking />
      <About />
    </MainLayout>
  )
}

export default Home