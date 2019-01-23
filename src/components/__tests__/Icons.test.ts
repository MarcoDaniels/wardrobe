import * as Icons from '../Icons'

describe('Icons List', () => {
	it('should check for icons base properties', () => {
		expect(Icons.user).toHaveProperty('name')
		expect(Icons.user).toHaveProperty('viewBox')
		expect(Icons.user).toHaveProperty('draw')
	})
})
