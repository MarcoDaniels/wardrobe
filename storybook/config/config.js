import {configure, addDecorator} from '@storybook/react';
import {configureViewport, INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withKnobs} from '@storybook/addon-knobs/react';
import {withOptions} from '@storybook/addon-options';

import '../style.scss'

addDecorator(
    withOptions({
        name: `wardrobe`,
        url: 'https://github.com/MarcoDaniels/wardrobe',
        showAddonPanel: true,
        goFullScreen: false,
        enableShortcuts: false
    })
);

configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS
    }
});

addDecorator(withKnobs);

const req = require.context('../stories', true, /\.tsx?$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
