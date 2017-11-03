import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Home')

// const scrollToComponent = __CLIENT__ ? require('react-scroll-to-component') : () => {}

class Home extends Component {
  render() {
    return <div className={cn()}>Covesting</div>
  }
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
