import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withInfo } from '@storybook/addon-info'
import { boolean, select, text } from '@storybook/addon-knobs'
import { Button, Link, Overlay, Modal, ModalPosition } from '../../src/elements'

storiesOf('Elements', module)
	// .addDecorator(withInfo)
	.add('Button', () => (
		<Button
			onClick={() => console.log('clicked')}
			disabled={boolean('disabled', false)}
		>
			{text('content', 'click me')}
		</Button>
	))
	.add('Link', () => (
		<Link
			href={text('href', 'https://marcodaniels.com')}
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
	.add('Modal', () => {
		return (
			<Modal
				active={boolean('active', true)}
				position={select('position', ModalPosition, ModalPosition.bottomLeft as any)}
			>
				{text('modal content', 'modal content')}
			</Modal>
		)
	})
