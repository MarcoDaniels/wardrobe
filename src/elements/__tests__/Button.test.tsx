import * as React from 'react'
import { mount } from 'enzyme'

import { Button } from '../Button'

describe('Button component', () => {
	it('should render button with props', () => {
		const component = mount(
			<Button onClick={jest.fn()}>click me</Button>
		)

		const element = component.find('button')

		expect(element.text()).toBe('click me')
	})

	it('should trigger callback function', () => {
		const callback = jest.fn()

		const component = mount(
			<Button onClick={callback}/>
		)

		component.find('button').simulate('click')
		expect(callback).toBeCalled()
	})

	it('should render button with classname', () => {
		const component = mount(
			<Button onClick={jest.fn()} classes={'className1'}/>
		)
		const element = component.find('button')

		expect(element.hasClass('className1')).toBeTruthy()
	})
})
