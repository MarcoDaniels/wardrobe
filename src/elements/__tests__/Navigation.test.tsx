import React from 'react'
import { render } from 'enzyme'
import Navigation from '../Navigation'

describe('Navigation component', () => {
	it('should render navigation component and match children', () => {
		const component = render(
			<Navigation>
				<a href={'url-1'}>1</a>
				<a href={'url-2'}>2</a>
			</Navigation>
		)

		expect(component.find('li')).toHaveLength(2)
		expect(component.find('a')).toHaveLength(2)
	})
})
