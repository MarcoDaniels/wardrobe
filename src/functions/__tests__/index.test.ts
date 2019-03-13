import { getCookie, setCookie } from '../index'

describe('Functions exports', () => {
	it('should verify all exports', () => {
		expect(setCookie).toBeDefined()
		expect(getCookie).toBeDefined()
	})
})
