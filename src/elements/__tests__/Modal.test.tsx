import React from 'react'
import { mount } from 'enzyme'
import Modal, { ModalPosition } from '../Modal'

describe('Modal Component', () => {
	it('should mount modal and match children contents', () => {
		const component = mount(
			<Modal
				active={true}
				position={ModalPosition.bottom}
			>
				<p>modal contents</p>
			</Modal>
		)

		const element = component.find('p')

		expect(element.text()).toBe('modal contents')
	})

	it('should mount modal and match required props', () => {
		const component = mount(
			<Modal
				active={false}
				position={ModalPosition.bottom}
			/>
		)

		const element = component.find('StyledComponent')

		expect(element.prop('active')).toBe(false)
		expect(element.prop('position')).toBe(ModalPosition.bottom)
	})

	it('should mount modal and match optional props', () => {
		const component = mount(
			<Modal
				active={true}
				position={ModalPosition.bottom}
				classes={'this-class'}
			/>
		)

		const element = component.find('StyledComponent')

		expect(element.hasClass('this-class')).toBeTruthy()
	})
})
