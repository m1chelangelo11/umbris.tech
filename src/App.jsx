import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import LanguageProvider from './components/layout/LanguageProvider'
import LenisProvider from './components/layout/LenisProvider'
import About from './components/sections/About'
import Cases from './components/sections/Cases'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Process from './components/sections/Process'
import Solutions from './components/sections/Solutions'
import StatsBar from './components/sections/StatsBar'
import SystemDiagram from './components/sections/SystemDiagram'
import Ticker from './components/sections/Ticker'

function App() {
  return (
    <LanguageProvider>
      <LenisProvider>
        <Header />
        <main>
          <Hero />
          <Ticker />
          <StatsBar />
          <About />
          <Solutions />
          <SystemDiagram />
          <Cases />
          <Process />
          <Contact />
        </main>
        <Footer />
      </LenisProvider>
    </LanguageProvider>
  )
}

export default App
