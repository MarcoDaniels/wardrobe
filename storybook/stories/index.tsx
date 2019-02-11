import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, color, select } from '@storybook/addon-knobs'
import { Button, Link, Overlay } from '../../src'
import { IconWrapper } from '../../src/icons/IconWrapper'
import * as Icons from '../../src/icons'
import { withInfo } from '@storybook/addon-info'

storiesOf('MarcoDaniels', module)
	.add('wardrobe', () => (
		<div className={'storybook'}>
			<h2>Welcome to MarcoDaniel's wardrobe</h2>
			<p>
				This project is a component
				library of React.js components for <Link
				href={'https://marcodaniels.com'}
				openNewTab={true}>MarcoDaniels</Link> projects.
			</p>
		</div>
	))

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

storiesOf('Components', module)
	.addDecorator(withInfo)
	.add('Button', () => (
		<Button
			onClick={() => console.log('click')}
			disabled={boolean('disabled', false)}
			classes={text('classes', 'storybook')}
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
			<React.Fragment>
				<p>this is background content</p>
				<Overlay active={boolean('active', false)}>
					{text('overlay content', 'overlay content')}
				</Overlay>
			</React.Fragment>
		)
	})
