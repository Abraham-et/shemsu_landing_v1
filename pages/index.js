
import About from '../components/about'
import Header from '../components/header'
import Features from '../components/features'
import Services from '../components/services'
import Team from '../components/team'
import Contact from '../components/contact'
import Navigation from '../components/navigation'
export default function Home() {

  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <About />
      <Services />
      <Team />
      <Contact />
    </div>

  )
}