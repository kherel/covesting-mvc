import React from 'react'
import 'scss/style.scss'
import '../src/assets/svgSprite/svgInsert'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Th from 'A_Th'
import A_Svg from 'A_Svg'
import A_Button from 'A_Button'

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

storiesOf('A_Th', module)
  .add('Table header small', () => <A_Th type="small">Total weight</A_Th>)
  .add('Table header normal', () => <A_Th type="normal">Total weight</A_Th>)
  .add('Table header dark', () => <A_Th type="dark">Total weight</A_Th>)

storiesOf('A_Svg', module).add('Stars', () => (
  <div>
    <p>Empty star</p>
    <A_Svg type="star">Total weight</A_Svg>
    <p>Active star</p>
    <A_Svg type="star" active>
      Total weight
    </A_Svg>
  </div>
))

storiesOf('A_Button', module)
  .add('Buttons', () => (
    <div>
      <p>Primary button</p>
      <A_Button onClick={action('clicked')} type="button-primary" btnType="submit">
        Follow
      </A_Button>
      <p>Secondary button (disabled)</p>
      <A_Button onClick={action('clicked')} disabled type="button-secondary" btnType="reset">
        Messages
      </A_Button>
      <p>Menu button</p>
      <div style={{ width: '298px', padding: '20px', backgroundColor: '#0084c9' }}>
        <A_Button onClick={action('clicked')} type="button-menu" btnType="button">
          Support
        </A_Button>
      </div>
    </div>
  ))
  .add('Buttons-links', () => (
    <div>
      <p>External button-link</p>
      <A_Button onClick={action('clicked')} type="link-primary" external btnType="submit">
        Follow
      </A_Button>
    </div>
  ))
