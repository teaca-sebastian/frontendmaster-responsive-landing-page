import { illustration } from '../assets'
import styles from '../style'
import { Button } from './index'

const Hero = () => (
	<>
		<div className='flex-1 flex flex-col items-center sm:items-start gap-4 sm:gap-7 sm:justify-center'>
			<h1 className={`${styles.heading1} text-center sm:text-left max-w-sm sm:max-w-md`}>
				Bring everyone together to build better products.
			</h1>
			<p className={`${styles.paragraph} text-center sm:text-left max-w-xs sm:max-w-sm`}>
				Manage makes it simple for software teams to plan day-to-day tasks while
				keeping the larger team goals in view.
			</p>
      <Button className='my-5' />
		</div>
		<div className='flex-1 flex justify-center items-center'>
			<img src={illustration} alt='illustration' className='object-contain w-full max-w-xs sm:max-w-max' />
		</div>
	</>
)

export default Hero
