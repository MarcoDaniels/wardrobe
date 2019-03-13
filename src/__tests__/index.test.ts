import { Collections, Elements, Implementations } from '../index'

describe('Main exports', () => {
	it('should verify all exports', () => {
		expect(Elements).toBeDefined()
		expect(Collections).toBeDefined()
		expect(Implementations).toBeDefined()
	})
})
