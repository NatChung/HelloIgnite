import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Counter from './Counter'
import { action } from '@storybook/addon-actions';

storiesOf('Counter')
  .add('Default', () => (
    <Counter 
        value={9}
        onSyncIncrease={action('onSyncIncrease')} 
        onSyncDecrease={action('onSyncDecrease')}
        onAsyncIncrease={action('onAsyncIncrease')}
        onAsyncDecrease={action('onAsyncDecrease')}
        />
  ))