import { Button } from './index'
import { footerLinks, footerSocials } from '../constants'
import { logoFooter } from '../assets'

const Footer = () => (
	<>
		<div className='flex max-w-sm flex-col items-center sm:flex-col-reverse sm:justify-between mx-auto gap-10'>
			<ul className='flex justify-between sm:max-w-[140px] gap-2'>
				{footerSocials.map((link) => (
					<li key={link.id}>
						<a href={link.link}>
							<img src={link.logo} className='w-7' alt={link.id} />
						</a>
					</li>
				))}
			</ul>
			<img src={logoFooter} className='w-[140px] object-contain ' alt='logo' />
		</div>
		<nav className='my-5 sm:my-0 sm:flex-1'>
			<ul className='flex max-h-28 lg:max-h-32 flex-col flex-wrap content-center items-start gap-3 text-xs lg:text-sm font-light text-white'>
				{footerLinks.map((link) => (
					<li key={link.id} className='mx-10 sm:mx-5 md:mx-10 lg:mx-20'>
						<a href={link.link}>{link.name}</a>
					</li>
				))}
			</ul>
		</nav>
		<form className='flex flex-wrap gap-2 sm:items-start'>
			<input
				type='text'
				className='flex-1 rounded-full px-5 py-3 text-xs'
				placeholder='Updates in your inbox...'
			/>
			<Button text={'GO'} className='mx-auto block' />
		</form>
	</>
)

export default Footer
