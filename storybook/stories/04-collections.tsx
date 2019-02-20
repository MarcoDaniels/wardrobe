import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text } from '@storybook/addon-knobs'
import Modal from '../../src/collections/Modal'

storiesOf('Collections', module)
	.addDecorator(withInfo)
	.add('Modal', () => {

		let active = true
		return (
			<Modal
				active={boolean('active', active)}
				closeButton={boolean('show close button', true)}
				closeButtonCallback={() => console.log('close it')}
				contentClasses={text('classes', 'storybook')}
			>
				{text('modal content', 'modal content')}
			</Modal>
		)
	})
