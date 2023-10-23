const navLinks = document.querySelector('nav ul')
const burger = document.querySelector('nav .burger')

const toggleNavigation = () => {
	// Toggle navigation
	const isOpen = navLinks.classList.toggle('open')
	navLinks.setAttribute('aria-expanded', isOpen)

	// Toggle burger icon
	const [oldClass, newClass] = isOpen ? ['bars', 'times'] : ['times', 'bars']
	const burgerIcon = burger.querySelector('i')
	burgerIcon.className = burgerIcon.className.replace(oldClass, newClass)
}

burger.addEventListener('click', toggleNavigation)

navLinks.addEventListener('click', (e) => {
	const { height } = e.target.getBoundingClientRect()

	if (e.clientY > height) {
		toggleNavigation()
	}
})
