import {configure, addDecorator} from '@storybook/react';
import {configureViewport, INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withKnobs} from '@storybook/addon-knobs/react';

import '../style.scss'

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
