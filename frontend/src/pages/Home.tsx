import MainLayout from '../layouts/MainLayout'
import Hero from '../components/home/Hero'
import Live from '../components/home/Live'
import News from '../components/home/News'
import Videos from '../components/home/Videos'
import Ranking from '../components/home/Ranking'
import About from '../components/home/About'

function Home() {
  return (
    <MainLayout>
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