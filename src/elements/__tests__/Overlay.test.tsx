import React from 'react'
import { mount } from 'enzyme'
import { Overlay } from '../Overlay'

describe('Overlay component', () => {
	it('should show overlay content', () => {
		const component = mount(
			<Overlay active={true}>
				<p>show overlay content</p>
			</Overlay>
		)

		const element = component.find('p')
		expect(element.text()).toBe('show overlay content')
	})

	it('should not show overlay content', () => {
		const component = mount(
			<Overlay active={false}>
				<p>show overlay content</p>
			</Overlay>
		)
		
		expect(component.find('p')).not.toBeFalsy()
	})
})
