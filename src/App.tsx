import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { FocusAreas } from '@/components/sections/FocusAreas'
import { Portfolio } from '@/components/sections/Portfolio'
import { Philosophy } from '@/components/sections/Philosophy'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Portfolio />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
