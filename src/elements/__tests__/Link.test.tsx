import * as React from 'react'
import { mount } from 'enzyme'

import { Link } from '../Link'

describe('Link component', () => {
	it('should render link with props and data', () => {
		const component = mount(
			<Link link={'marcodaniels.com'} isActive={false}>
				link text
			</Link>
		)

		expect(component.prop('isActive')).toBe(false)

		const element = component.find('a')

		expect(element.text()).toBe('link text')
		expect(element.prop('href')).toBe('marcodaniels.com')
	})

	it('should render link with class', () => {
		const component = mount(
			<Link link={''} isActive={true} classes={'class1'}/>
		)

		expect(component.find('a').hasClass('class1')).toBeTruthy()
	})

	it('should render link with props and data in new tab', () => {
		const component = mount(
			<Link link={'marcodaniels.com'} isActive={true} newTab={true}>
				link text
			</Link>
		)

		expect(component.prop('isActive')).toBe(true)

		const element = component.find('a')

		expect(element.text()).toBe('link text')
		expect(element.prop('target')).toBe('_blank')
		expect(element.prop('rel')).toBe('noopener noreferrer')
	})

	it('should render link in new tab with class', () => {
		const component = mount(
			<Link link={''} isActive={true} newTab={true} classes={'class2'}/>
		)

		expect(component.find('a').hasClass('class2')).toBeTruthy()
	})
})
