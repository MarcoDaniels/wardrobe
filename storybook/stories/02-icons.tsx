import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { boolean, color, number, select } from '@storybook/addon-knobs'
import { IconWrapper } from '../../src/icons/IconWrapper'
import * as Icons from '../../src/icons'

storiesOf('Icons', module)
	.addDecorator(withInfo)
	.add('Icons', () => {
		return (
			<IconWrapper
				icon={select('icon', Icons, Icons.user as any)} // because
				color={color('color', '#000')}
				size={number('size', 100)}
				spinning={boolean('spinning', false)}
			/>
		)
	})
