import * as React from 'react'
import { mount } from 'enzyme'
import Modal, { ModalBorder, ModalPosition } from '../Modal'

describe('Modal Component', () => {
	it('should mount modal and match children contents', () => {
		const component = mount(
			<Modal
				active={true}
				position={ModalPosition.bottom}
				border={ModalBorder.all}
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
				border={ModalBorder.all}
			/>
		)

		const element = component.find('StyledComponent')

		expect(element.prop('active')).toBe(false)
		expect(element.prop('position')).toBe(ModalPosition.bottom)
		expect(element.prop('border')).toBe(ModalBorder.all)
	})

	it('should mount modal and match optional props', () => {
		const component = mount(
			<Modal
				active={true}
				position={ModalPosition.bottom}
				border={ModalBorder.all}
				borderRadius={10}
				borderColor={'green'}
				classes={'this-class'}
			/>
		)

		const element = component.find('StyledComponent')

		expect(element.prop('borderRadius')).toBe(10)
		expect(element.prop('borderColor')).toBe('green')
		expect(element.hasClass('this-class')).toBeTruthy()
	})
})
