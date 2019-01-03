import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs/react'
import { Link } from '../../src'

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
