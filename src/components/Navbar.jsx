import { useState } from 'react'
import { hamburger, logo, close } from '../assets/index'
import { navLinks } from '../constants'
import { Button } from './index'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleMenu = () => {
		document.body.style.overflow = 'auto'
		if (!isOpen) {
			document.body.style.overflow = 'hidden'
		}
		setIsOpen((prev) => !prev)
	}
	return (
		<>
			<div className='relative z-10 flex w-full items-center justify-between py-10'>
				<div>
					<img src={logo} className='w-[110px] object-contain' alt='logo' />
				</div>

				{/* mobile nav */}
				<div className='block sm:hidden' onClick={handleMenu}>
					<img
						src={isOpen ? close : hamburger}
						className='h-6 w-6 object-contain'
						alt='menu'
					/>
				</div>
				<nav
					className={`${
						isOpen ? 'block' : 'hidden'
					} animate-menu absolute inset-x-7 top-24 z-10 rounded bg-white sm:hidden`}
				>
					<ul className='flex flex-col items-center gap-4 py-6'>
						{navLinks.map((link) => (
							<li key={link.id}>
								<a href={link.link} className='font-primary font-semibold'>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<nav className='hidden sm:block'>
					<ul className='flex items-center gap-4 md:gap-7'>
						{navLinks.map((link) => (
							<li key={link.id}>
								<a href={link.link} className='font-primary text-sm'>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<Button className='hidden lg:block' />
			</div>
			{/* gradient */}
			<div
				className={`${
					isOpen ? 'opacity-100' : 'opacity-0'
				} gradient absolute left-0 top-0  h-[110vh] w-screen transition duration-300 sm:hidden`}
			></div>
		</>
	)
}

export default Navbar
