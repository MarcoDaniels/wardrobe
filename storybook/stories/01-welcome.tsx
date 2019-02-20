import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '../../src/elements/Link'
import { whyDidYouUpdate } from 'why-did-you-update'

if (process.env.NODE_ENV !== 'production') {
	whyDidYouUpdate(React, {
		exclude: /^(PropVal|Node|Story|CopyButton|Props|Pre|ReactDecorator)/
	})
}

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
