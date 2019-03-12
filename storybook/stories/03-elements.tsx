import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, color, number, select, text } from '@storybook/addon-knobs'
import { Button, Link, Overlay, ModalBorder, Modal, ModalPosition } from '../../src/elements'

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
	.add('Modal', () => {
		return (
			<Modal
				active={boolean('active', true)}
				position={select('position', ModalPosition, ModalPosition.bottomLeft as any)}
				border={select('border', ModalBorder, ModalBorder.all as any)}
				borderColor={color('border color', '#000')}
				borderRadius={number('border radius', 2)}
				classes={text('classes', 'storybook')}
			>
				{text('modal content', 'modal content')}
			</Modal>
		)
	})
