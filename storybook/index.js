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
import A_Card from 'A_Card'
import M_Chart from 'M_Chart'
import A_MenuIcon from 'A_MenuIcon'
import A_Image from 'A_Image'
import M_SimpleChart from '../src/components/widgets/M_SimpleChart/index'

const styleDecorator = storyFn => (
  <div
    style={{
      width: '100%',
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '50px',
    }}
  >
    {storyFn()}
  </div>
)

const whiteBackgroundDecorator = storyFn => (
  <div style={{ margin: 0, width: '100%', padding: '50px', backgroundColor: '#fff' }}>
    {storyFn()}
  </div>
)

const blueBackgroundDecorator = storyFn => (
  <div
    style={{
      margin: 0,
      width: 260,
      padding: '20px',
      backgroundColor: '#0084c9',
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
  .addDecorator(whiteBackgroundDecorator)
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

storiesOf('A_Svg', module)
  .add('Stars', () => (
    <div>
      <p>Empty star</p>
      <A_Svg type="star" />
      <p>Active star</p>
      <A_Svg type="star" active />
    </div>
  ))
  .add('Logo', () => (
    <div>
      <p>Blue logo</p>
      <A_Svg type="logo-blue" />
      <p>White logo</p>
      <A_Svg type="logo-white" />
    </div>
  ))

storiesOf('A_MenuIcon', module)
  .addDecorator(blueBackgroundDecorator)
  .add('Menu icons', () => (
    <div>
      <A_MenuIcon type="dashboard" active />
      <A_MenuIcon type="find-fund" />
      <A_MenuIcon type="find-trader" />
      <A_MenuIcon type="community" />
      <A_MenuIcon type="messages" />
      <A_MenuIcon type="reports" />
      <A_MenuIcon type="wallet" />
      <A_MenuIcon type="settings" />
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
    </div>
  ))
  .addDecorator(blueBackgroundDecorator)
  .add('Menu button', () => (
    <A_Button onClick={action('clicked')} type="button-menu" btnType="button">
      Support
    </A_Button>
  ))

storiesOf('A_Card', module).add('Card', () => (
  <A_Card style={{ width: '300px', padding: '10px' }}>Hello, world!</A_Card>
))

const chartData = [
  { x: '2017-01-14', y: 80 },
  { x: '2017-01-15', y: 60 },
  { x: '2017-01-16', y: 90 },
  { x: '2017-01-17', y: 30 },
  { x: '2017-01-18', y: 40 },
]

storiesOf('M_Chart', module)
  .addDecorator(whiteBackgroundDecorator)
  .add('Big chart', () => (
    <M_Chart data={chartData} width={737} height={193} axisYMargin={27} axisXMargin={25} />
  ))
  .add('Small chart', () => <M_SimpleChart data={chartData} width={112} height={44} />)

storiesOf('A_Image', module).add('Rounded image', () => (
  <A_Image
    src={require('../static/img/userpics/userpic1.png')}
    width={47}
    height={47}
    alt="userpic"
    rounded
  />
))
