import { illustration } from '../assets'
import styles from '../style'
import { Button } from './index'

const Hero = () => (
	<>
		<div className='flex flex-1 flex-col items-center gap-4 sm:items-start sm:justify-center sm:gap-7'>
			<h1
				className={`${styles.heading1} max-w-sm text-center text-dark sm:max-w-md xl:max-w-lg sm:text-left`}
			>
				Bring everyone together to build better products.
			</h1>
			<p
				className={`${styles.paragraph} max-w-xs text-center sm:max-w-sm sm:text-left`}
			>
				Manage makes it simple for software teams to plan day-to-day tasks while
				keeping the larger team goals in view.
			</p>
			<Button className='my-5' />
		</div>
		<div className='flex flex-1 items-center justify-center'>
			<img
				src={illustration}
				alt='illustration'
				className='w-full max-w-xs object-contain sm:max-w-max'
			/>
		</div>
	</>
)

export default Hero
