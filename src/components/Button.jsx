/* eslint-disable react/prop-types */
const Button = ({ invert = false, className = '', text = 'Get Started' }) => (
	<button
		className={`${className} ${
			invert ? 'bg-white text-accent' : 'bg-accent text-white'
		} btn-shadow rounded-full px-6 py-3 font-primary text-xs sm:text-sm transition hover:opacity-80 active:scale-105 `}
	>
		{text}
	</button>
)

export default Button
