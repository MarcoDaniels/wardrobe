import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text } from '@storybook/addon-knobs'
import ModalOverlay from '../../src/collections/ModalOverlay'

storiesOf('Collections', module)
	.addDecorator(withInfo)
	.add('Modal Overlay', () => {

		let active = true
		return (
			<ModalOverlay
				active={boolean('active', active)}
				closeButton={boolean('show close button', true)}
				closeButtonCallback={() => console.log('close it')}
				contentClasses={text('classes', 'storybook')}
			>
				{text('modal content', 'modal content')}
			</ModalOverlay>
		)
	})
