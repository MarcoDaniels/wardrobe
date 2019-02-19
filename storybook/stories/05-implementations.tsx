import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { number, text } from '@storybook/addon-knobs'
import { CookieConsent } from '../../src/implementations/CookieConsent'

storiesOf('Implementations', module)
	.addDecorator(withInfo)
	.add('Cookie consent', () => {
		return (
			<CookieConsent
				cookieName={text('cookie name', 'consent')}
				cookieValue={text('cookie value', 'true')}
				expirationDays={number('expiration days', 1)}
			/>
		)
	})
