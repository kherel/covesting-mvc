import React, { Component } from 'react'
import './style.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Home')
import A_SVG from '../../widgets/A_Svg'

// const scrollToComponent = __CLIENT__ ? require('react-scroll-to-component') : () => {}

class Home extends Component {
  render() {
    return <div className={cn()}>Covesting<A_SVG type="star" /></div>
  }
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
