import React from 'react'
import 'scss/style.scss'

import { storiesOf, addDecorator } from '@storybook/react'
import A_H from 'A_H'
import A_P from 'A_P'
import A_TH from 'A_TH'

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

addDecorator(styleDecorator)

storiesOf('A_H', module)
  .add('Page title', () => <A_H type="page">Trader profile</A_H>)
  .add('Section title', () => <A_H type="section">Dashboard</A_H>)
  .add('User section title', () => <A_H type="user">Luke Shaw</A_H>)

storiesOf('A_P', module)
  .addDecorator(storyFN => (
    <div style={{ margin: 0, width: 260, padding: '22px', backgroundColor: '#fff' }}>
      {storyFN()}
    </div>
  ))
  .add('Description paragraph', () => (
    <A_P type="description">
      Small Bites. I have a style that takes small bites of the Forex markets movements to achieve a
      monthly gain that is safe from heavy loss. I first analyze for the big trend and only trade
      with it.
    </A_P>
  ))
  .add('Section subtitle', () => <A_P type="subtitle">Small Bites...</A_P>)

storiesOf('A_TH', module)
  .add('Table header small', () => <A_TH type="small">Total weight</A_TH>)
  .add('Table header normal', () => <A_TH type="normal">Total weight</A_TH>)
  .add('Table header dark', () => <A_TH type="dark">Total weight</A_TH>)
