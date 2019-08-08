import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { ModalOverlay } from '../../src/collections/ModalOverlay'
import { Navigation } from '../../src/collections/Navigation'

storiesOf('Collections', module)
	.add('Modal Overlay', () => {
		return (
			<ModalOverlay
				title={text('title', 'This modal is awesome')}
				closeButton={boolean('show close button', true)}
				classes={text('classes', 'storybook')}
			>
				{text('modal content', 'The contents of this modal are awesome')}
			</ModalOverlay>
		)
	})
	.add('Navigation', () => {
		const brand = () => <a href="#">Home</a>

		return (
			<Navigation brandLink={brand()}>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</Navigation>
		)
	})
