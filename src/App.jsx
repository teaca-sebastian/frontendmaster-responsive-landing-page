import { layout } from "./style"
import { Navbar, Hero, Features, Testimonials, CTA, Footer } from './components/index'

const App = () => (
  <main className="mx-auto sm:space-y-7">
    <div className={`${layout.section} ${layout.paddingX}`}>
      <Navbar />
    </div>

    <div className={`${layout.sectionReverse} ${layout.paddingX}`}>
      <Hero />
    </div>

    <div>
      <Features />
    </div>

    <div>
      {/* w-100 */}
      <Testimonials />
    </div>

    <div>
      {/* w-100 */}
      <CTA />
    </div>

    <div>
      {/* w-100 */}
      <Footer />
    </div>
  </main>
)
export default App