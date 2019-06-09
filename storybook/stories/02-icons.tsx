import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, color, number, select } from '@storybook/addon-knobs'
import { Wrapper } from '../../src/icons/Wrapper'
import { Icons } from '../../src/icons'

storiesOf('Icons', module)
	.addDecorator(withInfo)
	.add('Icons', () => {
		return (
			<Wrapper
				icon={select('icon', Icons, Icons.addressBook as any)} // because
				color={color('color', '#000')}
				size={number('size', 100)}
				spinning={boolean('spinning', false)}
			/>
		)
	})
