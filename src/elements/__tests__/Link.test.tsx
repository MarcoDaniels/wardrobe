import React from 'react'
import { shallow } from 'enzyme'

import { Link } from '../Link'

describe('Link component', () => {
	it('should render link with props and data', () => {
		const component = shallow(
			<Link href={'marcodaniels.com'}>
				link text
			</Link>
		)

		const element = component.find('a')

		expect(element.text()).toBe('link text')
		expect(element.prop('href')).toBe('marcodaniels.com')
	})

	it('should render link with class', () => {
		const component = shallow(
			<Link href={''} classes={'class1'}/>
		)

		expect(component.find('a').hasClass('class1')).toBeTruthy()
	})

	it('should render link with props and data in new tab', () => {
		const component = shallow(
			<Link href={'marcodaniels.com'} openNewTab={true}>
				link text
			</Link>
		)

		const element = component.find('a')

		expect(element.text()).toBe('link text')
		expect(element.prop('target')).toBe('_blank')
		expect(element.prop('rel')).toBe('noopener noreferrer')
	})

	it('should render link in new tab with class', () => {
		const component = shallow(
			<Link href={''} openNewTab={true} classes={'class2'}/>
		)

		expect(component.find('a').hasClass('class2')).toBeTruthy()
	})
})
