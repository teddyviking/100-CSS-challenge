import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import Day002 from './index';

storiesOf('CSS Challenge/Day 002', module)
  .addDecorator(
    host({
      title: 'Day 2',
      align: 'center middle',
      height: 400,
      width: 400
    })
  )
  .add('Display menu icon', () => <Day002 />);
