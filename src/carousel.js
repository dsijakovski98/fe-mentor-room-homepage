const articles = [
	{
		title: 'Discover innovative ways to decorate',
		paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
	},
	{
		title: 'We are available all across the globe',
		paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
	},
	{
		title: 'Manufactured with the best materials',
		paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
	}
]

let activeIndex = 0

const discoverArticle = document.querySelector('.discover article')
const furnitureImage = document.querySelector('.discover .furniture img')

const [prevBtn, nextBtn] = discoverArticle.querySelectorAll('.controls button')

const updateCarousel = () => {
	discoverArticle.querySelector('h2').textContent = articles[activeIndex].title
	discoverArticle.querySelector('p').textContent = articles[activeIndex].paragraph
	furnitureImage.src = `./images/hero/${activeIndex + 1}.jpg`
}

prevBtn.addEventListener('click', () => {
	if (activeIndex <= 0) {
		activeIndex = articles.length - 1
	} else {
		activeIndex--
	}

	updateCarousel()
})

nextBtn.addEventListener('click', () => {
	if (activeIndex >= articles.length - 1) {
		activeIndex = 0
	} else {
		activeIndex++
	}

	updateCarousel()
})

// Init carousel
updateCarousel()
