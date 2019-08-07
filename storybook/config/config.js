import {configure, addDecorator, addParameters} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withConsole} from '@storybook/addon-console';

// change storybook main page
addParameters(
    {
        options: {
            name: `wardrobe`,
            url: 'https://github.com/MarcoDaniels/wardrobe',
            showAddonPanel: true
        }
    }
);
// props values
addDecorator(withKnobs);

// console log
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const req = require.context('../stories', true, /\.tsx?$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
