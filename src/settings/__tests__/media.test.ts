import { media } from '../media'

describe('Media Queries', () => {
	it('should match phone media query', () => {
		const phone = media.phone`
			max-width: 100px;
		`

		const css = phone.join('').replace(/\s/g, '')

		expect(css).toEqual('@media(min-width:320px){max-width:100px;}')
	})

	it('should match tablet media query', () => {
		const tablet = media.tablet`
			max-width: 100px;
		`

		const css = tablet.join('').replace(/\s/g, '')

		expect(css).toEqual('@media(min-width:768px){max-width:100px;}')
	})

	it('should match desktop media query', () => {
		const desktop = media.desktop`
			max-width: 100px;
		`

		const css = desktop.join('').replace(/\s/g, '')

		expect(css).toEqual('@media(min-width:1224px){max-width:100px;}')
	})
})
