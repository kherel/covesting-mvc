import React, { Component } from 'react'
import * as T from 'prop-types'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('M_Board')

class M_Board extends Component {
  static propTypes = {
    title: T.string.isRequired,
    children: T.any.isRequired,
  }

  state = {
    positionY: 0,
    innerHeight: undefined
  }

  componentDidMount(){
    this.setState({innerHeight: this.innerNode.offsetHeight, wrapperHeight: this.wrapperNodeNode.offsetHeight})
  }

  handleWeel = ({ deltaY }) => {
    const scrollSpeed = 1
    const { positionY: oldPostintionY, innerHeight, wrapperHeight} = this.state
    let positionY = oldPostintionY + (deltaY * scrollSpeed)
    positionY = positionY < 0 ? 0 : positionY
    this.setState({ positionY })

  }

  render() {
    const { children, title } = this.props
    const { positionY } = this.state

    return (
      <div className={cn()} ref={node => this.wrapperNodeNode = node}>
        <div
          style={{ transform: `translate3d(0, ${-positionY}vh, 0px` }}
          onWheel={this.handleWeel}
          className={cn('inner')}
          ref={node => this.innerNode = node}
        >
          {children}
        </div>
        <div className={cn('header')}>{title}</div>
      </div>
    )
  }
}

M_Board.defaultProps = {
  title: '',
  children: '',
}
export default M_Board
