import * as React from 'react'
import { mount } from 'enzyme'
import Modal from '../Modal'

describe('Modal component', () => {
	it('should show modal content', () => {
		const component = mount(
			<Modal active={true} closeButton={true}>
				<p>this is modal content</p>
			</Modal>
		)

		const element = component.find('p')
		expect(element.text()).toBe('this is modal content')
	})

	it('should show modal with close button', () => {
		const component = mount(
			<Modal active={true} closeButton={true}/>
		)

		const button = component.find('button')
		const element = button.find('title')

		expect(element.text()).toBe('close')
	})

	it('should show modal without close button', () => {
		const component = mount(
			<Modal active={true} closeButton={false}/>
		)

		expect(component.find('button')).not.toBeFalsy()
	})

	it('should show modal and click close button', () => {
		const clickClose = jest.fn()

		const component = mount(
			<Modal active={true} closeButton={true} closeButtonCallback={clickClose}>
				<p>this is content</p>
			</Modal>
		)

		component.find('button').simulate('click')

		expect(clickClose).toHaveBeenCalled()
	})

	it('should show modal with custom classes', () => {
		const component = mount(
			<Modal active={true} closeButton={true} contentClasses={'this-class'}>
				<p>this is content</p>
			</Modal>
		)

		const element = component.find('p').parent()
		expect(element.hasClass('this-class')).toBeTruthy()
	})
})
