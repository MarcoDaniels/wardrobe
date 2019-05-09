import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { withInfo } from '@storybook/addon-info'
import { boolean, select, text } from '@storybook/addon-knobs'
import { Button, Link, Overlay, Modal, ModalPosition, Navigation } from '../../src/elements'
import { classes } from '../style/style'

storiesOf('Elements', module)
	// .addDecorator(withInfo)
	.add('Button', () => (
		<Button
			onClick={() => console.log('clicked')}
			disabled={boolean('disabled', false)}
			classes={select('classes', classes, classes.storybook)}
		>
			{text('content', 'click me')}
		</Button>
	))
	.add('Link', () => (
		<Link
			href={text('href', 'https://marcodaniels.com')}
			openNewTab={boolean('newTab', false)}
			classes={select('classes', classes, classes.storybook)}
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
				classes={select('classes', classes, classes.modal)}
			>
				{text('modal content', 'modal content')}
			</Modal>
		)
	})
	.add('Navigation', () => {
		const quickLinks = () => {
			return [
				<a href={'#'}>sm</a>,
				<a href={'#'}>rss</a>
			]
		}

		return (
			<>
				<Navigation quickLinks={quickLinks()}>
					<a href="#">Home</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
				</Navigation>
				<div style={{paddingTop: '40px'}}>
					{/*  */}
					<p>1 lots and lots of content</p>
					<p>2 lots and lots of content</p>
					<p>3 lots and lots of content</p>
					<p>4 lots and lots of content</p>
				</div>
			</>
		)
	})
