import { layout } from './style'
import {
	Navbar,
	Hero,
	Features,
	Testimonials,
	CTA,
	Footer,
} from './components/index'

const App = () => (
	<main className='mx-auto '>
		<div className={`${layout.section} ${layout.paddingX}`}>
			<Navbar />
		</div>

		<div className={`${layout.sectionReverse} ${layout.paddingX} sm:mt-10`}>
			<Hero />
		</div>

		<div className={`${layout.section} sm:my-20 sm:px-6 lg:px-12 lg:my-24 my-12 mb-20`}>
			<Features />
		</div>

		<div className='my-10'>
			<Testimonials />
		</div>

		<div className='bg-accent py-16'>
			{/* w-100 */}
			<div className={`${layout.section} ${layout.paddingX} items-center`}>
				<CTA />
			</div>
		</div>

		<div className='bg-footer py-8 lg:py-12'>
			{/* w-100 */}
			<div className={`${layout.sectionReverse} ${layout.paddingX}`}>
				<Footer />
			</div>
		</div>
	</main>
)
export default App
