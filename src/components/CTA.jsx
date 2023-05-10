import styles from '../style'
import { Button } from './index'

const CTA = () => (
	<>
		<h2 className={`${styles.heading2} text-center sm:text-left text-white md:leading-loose`}>
			Simplify how <br className='sm:hidden' /> your team <br className='hidden md:block ' /> works{' '}
			<br className='sm:hidden' /> today.
		</h2>
		<Button invert={true} />
	</>
)

export default CTA
