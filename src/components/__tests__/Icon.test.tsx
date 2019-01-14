import * as React from 'react'
import { mount } from 'enzyme'
import { IconType, Icon } from '../Icon'

const icon: IconType = {
	name: 'test icon name',
	draw: 'draw data'
}

describe('IconType wrapper component', () => {
	it('should mount icon', () => {
		const component = mount(
			<Icon icon={icon} color={'blue'} size={10}/>
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

	it('should mount icon with custom name and class', () => {
		const component = mount(
			<Icon
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
})
