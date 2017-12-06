import React from 'react';
import { configure } from '@storybook/react';

const req = require.context('../src', true, /.stories.js$/);

console.log(req);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
