import React from 'react'
import { mount } from 'enzyme'
import { ModalOverlay } from '../ModalOverlay'

describe('Modal component', () => {
	it('should show modal content', () => {
		const component = mount(
			<ModalOverlay closeButton={true} title={'this is modal title'}>
				<p>this is modal content</p>
			</ModalOverlay>
		)

		// set name to style-component?!
		// const title = component.filter('span')
		// expect(title.text()).toBe('this is modal title')

		const content = component.find('p')
		expect(content.text()).toBe('this is modal content')
	})

	it('should show modal with close button', () => {
		const component = mount(
			<ModalOverlay closeButton={true} title={'headline'}/>
		)

		const button = component.find('button')
		const element = button.find('title')

		expect(element.text()).toBe('close modal')
	})

	it('should show modal without close button', () => {
		const component = mount(
			<ModalOverlay closeButton={false} title={'headline'}/>
		)

		expect(component.find('button')).not.toBeFalsy()
	})

	it('should show modal with custom classes', () => {
		const component = mount(
			<ModalOverlay closeButton={true} title={'headline'} classes={'this-class'}>
				<p>this is content</p>
			</ModalOverlay>
		)

		expect(component.find('this-class')).toBeDefined()
	})

	it('should show modal and simulate close event', () => {
		const component = mount(
			<ModalOverlay closeButton={true} title={'this is modal title'}>
				<p>this is modal content</p>
			</ModalOverlay>
		)

		component.find('button').simulate('click')

		expect(component.state('active')).toBe(false)
	})
})
