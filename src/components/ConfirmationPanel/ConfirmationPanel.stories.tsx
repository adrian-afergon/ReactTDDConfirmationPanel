import * as React from 'react';
import {storiesOf} from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ConfirmationPanel } from './ConfirmationPanel';

const stories = storiesOf('ConfirmationPanel', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const value = text('Text value', 'Hello from ConfirmationPanel!!');
  return (
      <ConfirmationPanel>{value}</ConfirmationPanel>
  );
});
