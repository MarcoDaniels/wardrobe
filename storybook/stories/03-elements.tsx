import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text } from '@storybook/addon-knobs'
import { Button } from '../../src/elements/Button'
import { Link } from '../../src/elements/Link'
import { Overlay } from '../../src/elements/Overlay'

storiesOf('Elements', module)
	.addDecorator(withInfo)
	.add('Button', () => (
		<Button
			onClick={() => console.log('click')}
			disabled={boolean('disabled', false)}
			classes={text('classes', 'storybook')}
			classesOverride={boolean('classes override', false)}
		>
			{text('content', 'click me')}
		</Button>
	))
	.add('Link', () => (
		<Link
			href={text('href', 'https://marcodaniels.com')}
			classes={text('classes', 'storybook')}
			openNewTab={boolean('newTab', false)}
		>
			{text('content', 'this is a link')}
		</Link>
	))
	.add('Overlay', () => {
		return (
			<Overlay active={boolean('active', false)}>
				{text('overlay content', 'overlay content')}
			</Overlay>
		)
	})
