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
import A_Image from 'A_Image'
import A_ColoredValue from 'src/components/widgets/A_ColoredPercentValue'
import M_SimpleChart from 'M_SimpleChart'
import M_NavItem from 'M_MenuItem'
import O_BarChart from 'O_BarChart'
import O_BigChart from 'O_BigChart'
import O_ProfitTable from 'O_ProfitTable'

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

const menuDecorator = storyFn => (
  <div
    style={{
      margin: 0,
      width: 298,
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

storiesOf('A_ColoredValue', module).add('Colored Value', () => (
  <div>
    <A_ColoredValue value={10} percent />
    <A_ColoredValue value={-20} percent />
    <A_ColoredValue value={40} />
    <A_ColoredValue value={-155} />
  </div>
))

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

storiesOf('M_MenuItems', module)
  .addDecorator(menuDecorator)
  .add('Menu items', () => (
    <div>
      <M_NavItem to="/dashboard" title="Dashboard" type="dashboard" />
      <M_NavItem to="/dashboard" title="Find trader" type="find-trader" active />
      <M_NavItem to="/dashboard" title="Find fund" type="find-fund" />
      <M_NavItem to="/dashboard" title="Community" type="community" />
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
  .addDecorator(menuDecorator)
  .add('Menu button', () => (
    <A_Button onClick={action('clicked')} type="button-menu" btnType="button">
      Support
    </A_Button>
  ))

storiesOf('O_ProfitTable', module).add('ProfitTable', () => <O_ProfitTable />)

const chartData = [
  { x: '2017-01-14', y: 80 },
  { x: '2017-01-15', y: 60 },
  { x: '2017-01-16', y: 90 },
  { x: '2017-01-17', y: 30 },
  { x: '2017-01-18', y: 40 },
]

const barChartData = [40, 25, 20, 15]

storiesOf('Charts', module)
  .addDecorator(whiteBackgroundDecorator)
  .add('O_BigChart', () => (
    <O_BigChart data={chartData} width={737} height={193} axisYMargin={27} axisXMargin={25} />
  ))
  .add('M_SimpleChart', () => <M_SimpleChart data={chartData} width={112} height={44} />)
  .add('O_BarChart', () => <O_BarChart data={barChartData} width={400} height={158} />)

storiesOf('A_Image', module).add('Rounded image', () => (
  <A_Image
    src={require('../static/img/userpics/userpic1.png')}
    width={47}
    height={47}
    alt="userpic"
    rounded
  />
))
