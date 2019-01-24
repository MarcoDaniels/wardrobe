import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, color, select } from '@storybook/addon-knobs'
import { Link, Button } from '../../src'
import { Icon } from '../../src/components/Icon'
import * as Icons from '../../src/components/Icons'
import { Overlay } from '../../src/components/Overlay'

storiesOf('MarcoDaniels', module)
	.add('wardrobe', () => (
		<div className={'storybook'}>
			<h2>Welcome to MarcoDaniel's wardrobe</h2>
			<p>Here you can find React.js components for my personal projects</p>
		</div>
	))

storiesOf('Components', module)
	.add('Link', () => (
		<Link
			link={text('link', 'https://marcodaniels.com')}
			isActive={boolean('active', false)}
			newTab={boolean('newTab', false)}
			classes={text('classes', 'storybook')}
		>
			{text('content', 'this is a link')}
		</Link>
	))
	.add('Button', () => (
		<Button
			onClick={() => console.log('click')}
			classes={text('classes', 'storybook')}
		>
			{text('content', 'click me')}
		</Button>
	))
	.add('Icons', () => {
		return (
			<Icon
				icon={select('icon', Icons, Icons.user as any)} // because
				color={color('color', '#000')}
				size={number('size', 100)}
				spinning={boolean('spinning', false)}
			/>
		)
	})
	.add('Overlay', () => {
		return (
			<div>
				{text('background', 'background content')}
				<Overlay show={boolean('show', false)}>
					{text('overlay', 'overlay content')}
				</Overlay>
			</div>
		)
	})
