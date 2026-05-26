import Header from './components/layout/Header'
import FooterSimple from './components/layout/FooterSimple'
import LenisProvider from './components/layout/LenisProvider'
import AboutIntro from './components/sections/AboutIntro'
import CaseStudies from './components/sections/CaseStudies'
import Chapters from './components/sections/Chapters'
import Hero from './components/sections/Hero'
import Partners from './components/sections/Partners'
import QuoteSection from './components/sections/QuoteSection'
import SubscribeSection from './components/sections/SubscribeSection'

function App() {
  return (
    <LenisProvider>
      <Header />
      <main>
        <Hero />
        <Partners />
        <AboutIntro />
        <QuoteSection />
        <Chapters />
        <CaseStudies />
        <SubscribeSection />
      </main>
      <FooterSimple />
    </LenisProvider>
  )
}

export default App
