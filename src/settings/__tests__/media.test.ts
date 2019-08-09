import { media } from '../media'
import { FlattenSimpleInterpolation } from 'styled-components'

const formatCss = (css: FlattenSimpleInterpolation) => {
	return css.join('').replace(/\s/g, '')
}

describe('Media Queries', () => {
	it('should match phone media query', () => {
		const phone = media.phone`
			max-width: 100px;
		`
		expect(formatCss(phone)).toEqual('@media(min-width:320px){max-width:100px;}')
	})

	it('should match tablet media query', () => {
		const tablet = media.tablet`
			max-width: 100px;
		`
		expect(formatCss(tablet)).toEqual('@media(min-width:768px){max-width:100px;}')
	})

	it('should match desktop media query', () => {
		const desktop = media.desktop`
			max-width: 100px;
		`
		expect(formatCss(desktop)).toEqual('@media(min-width:1224px){max-width:100px;}')
	})

	it('should match css properties with interpolations', () => {
		const tablet = media.tablet({}, `display: none;`)
		expect(formatCss(tablet)).toEqual('@media(min-width:768px){display:none;}')
	})
})
