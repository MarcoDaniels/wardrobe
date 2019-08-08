import React from 'react'
import { mount, shallow } from 'enzyme'
import { Navigation } from '../Navigation'

describe('Navigation Component', () => {
	it('should display 2 links: (home and about)', () => {
		const component = shallow(
			<Navigation brandLink={<a>home</a>}>
				<a>about</a>
			</Navigation>
		)

		expect(component.find('a').length).toBe(2)
	})

	it('should simulate click and expand menu', () => {
		const component = mount(
			<Navigation brandLink={<a>home</a>}>
				<a>about</a>
				<a>contact</a>
			</Navigation>
		)

		expect(component.find('.nav-content').first().prop('show')).toBeFalsy()
		component.find('button').simulate('click')
		expect(component.find('.nav-content').first().prop('show')).toBeTruthy()
	})

	it('should simulate expand menu and collapse with button', () => {
		const component = mount(
			<Navigation brandLink={<a>home</a>}>
				<a>about</a>
				<a>contact</a>
			</Navigation>
		)

		// expand menu
		component.find('button').simulate('click')
		expect(component.find('.nav-content').first().prop('show')).toBeTruthy()

		// closes menu
		component.find('button').simulate('click')
		expect(component.find('.nav-content').first().prop('show')).toBeFalsy()
	})

	it('should simulate expand and collapse menu with links', () => {
		const component = mount(
			<Navigation brandLink={<a>home</a>}>
				<a>about</a>
				<a>contact</a>
			</Navigation>
		)

		// expand menu
		component.find('button').simulate('click')
		expect(component.find('.nav-content').first().prop('show')).toBeTruthy()

		// closes menu with first link (brand)
		component.find('a').first().simulate('click')
		expect(component.find('.nav-content').first().prop('show')).toBeFalsy()
	})

	it('should simulate click on link and not affect menu', () => {
		const component = mount(
			<Navigation brandLink={<a>home</a>}>
				<a>about</a>
				<a>contact</a>
			</Navigation>
		)

		// clicks first link (brand)
		component.find('a').first().simulate('click')
		expect(component.find('.nav-content').first().prop('show')).toBeFalsy()
	})
})
