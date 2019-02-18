import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '../../src/elements/Link'

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
