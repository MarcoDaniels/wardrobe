import React from 'react'
import { shallow } from 'enzyme'
import { Wrapper } from '../Wrapper'
import { IconType } from '../Type'
import { Icons } from '../'

const icon: IconType = {
	name: 'test icon name',
	viewBox: 'sizes',
	draw: 'draw data'
}

describe('IconWrapper component', () => {
	it('should check for icon properties', () => {
		const component = shallow(
			<Wrapper icon={icon} color={'blue'} size={10}/>
		)

		const svg = component.find('svg')
		expect(svg.prop('height')).toBe(10)
		expect(svg.prop('width')).toBe(10)

		const title = svg.find('title')
		expect(title.text()).toBe(icon.name)

		const path = svg.find('path')
		expect(path.prop('fill')).toBe('blue')
		expect(path.prop('d')).toBe(icon.draw)
	})

	it('should check for icon properties with custom name and class', () => {
		const component = shallow(
			<Wrapper
				icon={icon}
				color={'orange'}
				size={100}
				title={'custom title'}
				classes={'class1'}
			/>
		)

		const svg = component.find('svg')
		expect(svg.prop('height')).toBe(100)
		expect(svg.prop('width')).toBe(100)
		expect(svg.hasClass('class1')).toBeTruthy()

		const title = svg.find('title')
		expect(title.text()).toBe('custom title')

		const path = svg.find('path')
		expect(path.prop('fill')).toBe('orange')
		expect(path.prop('d')).toBe(icon.draw)
	})

	it('should check for icon properties and spinning action', () => {
		const component = shallow(
			<Wrapper icon={icon} color={'red'} size={10} spinning={true}/>
		)

		const svg = component.find('svg')
		expect(svg.prop('height')).toBe(10)
		expect(svg.prop('width')).toBe(10)

		const animation = component.find('animateTransform')
		expect(animation).toBeDefined()
		expect(animation.prop('type')).toBe('rotate')
	})

	it('should check all icons have base properties', () => {
		const Icon = Icons as Object
		for (const item in Icon) {
			if (item) {
				for (const key in item as Object) {
					if (Icon.hasOwnProperty(key)) {
						expect(Icon[key]).toHaveProperty('name')
						expect(Icon[key]).toHaveProperty('viewBox')
						expect(Icon[key]).toHaveProperty('draw')
					}
				}
			}
		}
	})
})
