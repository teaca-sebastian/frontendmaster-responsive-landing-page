import styles from '../style'
import { testimonials } from '../constants'
import { useRef, useState } from 'react'
import { Button } from './index'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselIndicators = useRef([])

  const handleIndicatorsUpdate = () => {
    carouselIndicators.current.forEach((dot, i) => {
      carouselIndicators.current[i].classList.remove('bg-accent')
      if (i === activeIndex) { 
        carouselIndicators.current[activeIndex].classList.remove('bg-white') 
        carouselIndicators.current[activeIndex].classList.add('bg-accent') 
      }
    })
  }
  
  const handleCarouselScrolling = () => {
    // scrolled amount
    let scrolled = document.querySelector('.daisy-carousel').scrollLeft
    // card width
    let width = document.querySelector('.daisy-carousel-item').offsetWidth + 20

    const step = (initialStep) => {
      if (scrolled / width % 1 != 0) {
        return Math.round(scrolled / width)
      } else return initialStep
    }

    setActiveIndex(step(activeIndex))
    handleIndicatorsUpdate()

  }

	return (
		<>
			<h2 className={`${styles.heading2} text-center md:mb-7`}>What they’ve said</h2>
			<div className='scrollbar-hidden daisy-carousel sm:snap-none mx-3 gap-5 sm:mx-0' onScroll={handleCarouselScrolling}>
				{testimonials.map((card) => (
					<div
						key={card.id}
						className='daisy-carousel-item relative md:px-5 md:py-7 mt-16 block max-w-[calc(100vw-1rem)] sm:max-w-md bg-card py-5 text-center'
					>
						<img
							src={card.avatar}
							alt='avatar'
							className='absolute -top-7 left-1/2 w-16 -translate-x-1/2 transform'
						/>
						<h3 className={`${styles.heading3} pb-5 pt-10`}>{card.name}</h3>
						<p
							className={`${styles.paragraph} mx-auto w-10/12 md:w-full text-xs leading-relaxed`}
						>
							{card.content}
						</p>
					</div>
				))}
			</div>
      <div className='flex justify-center gap-1 my-5 sm:hidden'>
       {[...Array(4)].map((e,i) => (
        <span key={i} className={`${i === 0 ? 'bg-accent' : 'bg-white'} w-2 h-2 rounded-full border-accent border-2`} ref={(element) => carouselIndicators.current.push(element)}></span>
       ))}
      </div>
      <Button className='mx-auto block my-10' />
		</>
	)
}

export default Testimonials
