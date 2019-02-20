import {configure, addDecorator} from '@storybook/react';
import {configureViewport, INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withKnobs} from '@storybook/addon-knobs';
import {withOptions} from '@storybook/addon-options';
import {withConsole} from '@storybook/addon-console';

import '../style.scss'

// change storybook main page
addDecorator(
    withOptions({
        name: `wardrobe`,
        url: 'https://github.com/MarcoDaniels/wardrobe',
        showAddonPanel: true,
        goFullScreen: false,
        enableShortcuts: false
    })
);

// viewport adapt
configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS
    }
});

// props values
addDecorator(withKnobs);

// console log
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const req = require.context('../stories', true, /\.tsx?$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
