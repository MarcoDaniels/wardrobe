import { getCookie, setCookie } from '../Cookie'

describe('Cookie functions', () => {
	it('should set cookie in document', () => {
		setCookie('name', 'value', 1);

		expect(document.cookie).toBe('name=value')
	})

	it('should set and get cookie from document', () => {
		setCookie('name1', 'value1', 1)

		const cookie = getCookie('name1')

		expect(cookie).toBe('value1')
	})

	it('should return false from no cookie', () => {
		const cookie = getCookie('name2')

		expect(cookie).toBe(false)
	})
})
