import * as React from 'react'
import { mount } from 'enzyme'
import CookieConsent from '../CookieConsent'

describe('Cookie Consent Component', () => {
	it('should show cookie consent content', () => {
		const component = mount(
			<CookieConsent
				cookieName={'consent'}
				cookieValue={'true'}
				expirationDays={1}
			>
				<p>this is cookie consent content</p>
			</CookieConsent>
		)

		const element = component.find('p')
		expect(element.text()).toBe('this is cookie consent content')
	})

	it('should show cookie consent with accept button', () => {
		const component = mount(
			<CookieConsent
				cookieName={'consent'}
				cookieValue={'true'}
				expirationDays={1}
			/>
		)

		const element = component.find('button')
		expect(element.text()).toBe('accept')
	})

	it('should show cookie consent, accept it and close it', () => {
		const component = mount(
			<CookieConsent
				cookieName={'consent'}
				cookieValue={'true'}
				expirationDays={1}
			>
				<p>this is cookie consent content</p>
			</CookieConsent>
		)

		component.find('button').simulate('click')

		expect(component.find('p')).not.toBeFalsy()
	})
})
