import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text } from '@storybook/addon-knobs'
import ModalOverlay from '../../src/collections/ModalOverlay'

storiesOf('Collections', module)
	.addDecorator(withInfo)
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
