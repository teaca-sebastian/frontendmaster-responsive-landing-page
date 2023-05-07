import { useState } from 'react'
import { hamburger, logo, close } from '../assets/index'
import { navLinks } from '../constants'
import styles from '../style'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => {
    document.body.style.overflow = "auto"
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } 
    setIsOpen(prev => !prev)
  }
	return (
		<div className={`${styles.paddingX} py-10 w-full relative flex items-center justify-between`}>
			<div>
				<img src={logo} className='object-contain w-[110px]' alt='logo' />
			</div>
			<div className='block sm:hidden' onClick={handleMenu}>
				<img src={isOpen ? close : hamburger} className='object-contain h-6 w-6' alt='menu' />
			</div>
      <div className={`${isOpen ? 'block' : 'hidden'} absolute bg-slate-300 animate-menu transition rounded inset-x-7 top-24`}>
        <ul className='flex flex-col items-center gap-4 py-6'>
        {navLinks.map(link => (
          <li key={link.id}>
            <a href={link.link} className='font-primary font-semibold'>{link.title}</a>
          </li>
        ))}
        </ul>
      </div>
		</div>
	)
}

export default Navbar
