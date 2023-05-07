import styles from "./style"
import { Navbar, Hero, Features, Testimonials, CTA, Footer } from './components/index'

const App = () => (
  <main>
    <div className="max-w-screen-lg mx-auto">
      {/* w-100 */}
      <Navbar />
    </div>

    <div>
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