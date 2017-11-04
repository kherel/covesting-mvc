import React from 'react'
import 'common/style.scss'

import { storiesOf, addDecorator } from '@storybook/react'
import A_H from 'A_H'

const styleDecorator = storyFn => (
  <div
    style={{
      width: '100%',
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {storyFn()}
  </div>
)

addDecorator(styleDecorator);

storiesOf('A_H', module)
  .add('Page title', () => <A_H type="page">Dashboard</A_H>)
  .add('Section title', () => <A_H type="section">Dashboard</A_H>)
  .add('User section title', () => <A_H type="user">Dashboard</A_H>)
