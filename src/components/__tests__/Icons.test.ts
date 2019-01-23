import * as Icons from '../Icons'

describe('Icons List', () => {
	it('should check all icons have base properties', () => {
		const Icon = Icons as Object;
		for (const key in Icon) {
			if (Icon.hasOwnProperty(key)) {
				expect(Icon[key]).toHaveProperty('name')
				expect(Icon[key]).toHaveProperty('viewBox')
				expect(Icon[key]).toHaveProperty('draw')
			}
		}
	})
})
