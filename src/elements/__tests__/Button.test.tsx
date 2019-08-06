import React from 'react'
import { mount } from 'enzyme'

import { Button } from '../Button'

describe('Button component', () => {
	it('should mount button and match children contents', () => {
		const component = mount(
			<Button onClick={jest.fn()}>click me</Button>
		)

		const element = component.find('button')

		expect(element.text()).toBe('click me')
	})

	it('should mount button and trigger callback function', () => {
		const callback = jest.fn()

		const component = mount(
			<Button onClick={callback}/>
		)

		component.find('button').simulate('click')
		expect(callback).toBeCalled()
	})

	it('should mount button with classname', () => {
		const component = mount(
			<Button onClick={jest.fn()} classes={'className1'}/>
		)
		const element = component.find('button')

		expect(element.hasClass('className1')).toBeTruthy()
	})

	it('should button button with disabled prop', () => {
		const component = mount(
			<Button onClick={jest.fn()} disabled={true}/>
		)

		const element = component.find('button')

		expect(element.prop('disabled')).toBeTruthy()
	})
})
