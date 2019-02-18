import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, text } from '@storybook/addon-knobs'
import Modal from '../../src/collections/Modal'

storiesOf('Collections', module)
	.addDecorator(withInfo)
	.add('Modal', () => {
		return (
			<Modal
				active={true}
				closeButton={boolean('show close button', true)}
				contentClasses={text('classes', 'storybook')}
			>
				{text('modal content', 'modal content')}
			</Modal>
		)
	})
