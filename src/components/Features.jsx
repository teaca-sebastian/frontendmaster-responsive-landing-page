import styles from '../style'
import { features } from '../constants'

const Features = () => (
	<>
		<div className='flex flex-1 flex-col items-center gap-4 sm:items-start sm:gap-7'>
			<h2
				className={`${styles.heading2} max-w-sm text-center text-dark sm:max-w-md sm:text-left xl:max-w-lg`}
			>
				What’s different about Manage?
			</h2>
			<p
				className={`${styles.paragraph} max-w-xs text-center sm:max-w-sm sm:text-left`}
			>
				Manage provides all the functionality your team needs, without the
				complexity. Our software is tailor-made for modern digital product
				teams.
			</p>
		</div>
		<div className='flex-1 space-y-5'>
			{features.map((feature, index) => (
				<div key={feature.id} className='ms-3 space-y-3'>
					<h3 className={`${styles.heading3} bg-accent-light sm:bg-white rounded-l-full flex items-center gap-2 md:gap-4 relative text-dark whitespace-nowrap`}>
						<span className='rounded-full text-xs bg-accent px-6 py-2 font-primary text-white'>
							{index}
						</span>
						{feature.title}
					</h3>
					<p className={`${styles.paragraph} sm:ml-16 md:ml-[4.5rem] leading-loose text-xs`}>{feature.content}</p>
				</div>
			))}
		</div>
	</>
)

export default Features
