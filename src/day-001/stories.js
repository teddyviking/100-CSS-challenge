import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import Day001 from './index';

storiesOf('helpers.storybook', module)
  .addDecorator(
    host({
      title: 'Day 1',
      align: 'center middle',
      height: 400,
      width: 400
    })
  )
  .add('Day001', () => <Day001 />);
