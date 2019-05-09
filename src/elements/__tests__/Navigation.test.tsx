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

	it('should render navigation component with quickLinks', () => {
		const quickLinks = () => {
			return [
				<a href={'quick-link-1'}>quick link 1</a>,
				<a href={'quick-link-2'}>quick link 2</a>
			]
		}

		const component = render(
			<Navigation quickLinks={quickLinks()}>
				<a href={'link-1'}>link 1</a>
				<a href={'link-2'}>link 2</a>
			</Navigation>
		)

		expect(component.find('ul')).toHaveLength(2)
		expect(component.find('li')).toHaveLength(4)
	})
})
