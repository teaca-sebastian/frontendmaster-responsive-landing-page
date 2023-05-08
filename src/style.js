const styles = {
	heading1: 'font-primary leading-snug text-3xl md:text-4xl lg:text-5xl font-bold',
	heading2: 'font-primary text-1xl md:text-2 lg:text-3xl font-bold',
	heading3: 'font-primary text-md md:text-lg lg:text-xl font-bold',
	paragraph: 'font-primary text-sm sm:text-base text-light',

	paddingY: 'sm:py-16 py-6',
	padding: 'sm:px-16 px-6 sm:py-12 py-4',

	marginX: 'sm:mx-16 mx-6',
	marginY: 'sm:my-16 my-6',
}

export const layout = {
	paddingX: 'px-6 lg:px-12',

	section: 'flex flex-col sm:flex-row mx-auto max-w-screen-xl justify-between gap-5',

	// for testimonials and footers
	'section-full': 'flex flex-col sm:flex-row mx-auto max-w-full',
	sectionReverse:
		'flex flex-col-reverse mx-auto max-w-screen-xl sm:flex-row justify-between gap-5',
}

export default styles
