import { layout } from "./style"
import { Navbar, Hero, Features, Testimonials, CTA, Footer } from './components/index'

const App = () => (
  <main className="mx-auto space-y-5 sm:space-y-10 md:space-y-15">
    <div className={`${layout.section} ${layout.paddingX}`}>
      <Navbar />
    </div>

    <div className={`${layout.sectionReverse} ${layout.paddingX}`}>
      <Hero />
    </div>

    <div className={`${layout.section} sm:px-6 lg:px-12`}>
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