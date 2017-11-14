import React, { Component } from 'react'
import T from 'prop-types'
import range from 'lodash/range'

export default type => WrappedComponent =>
  class WithScaledData extends Component {
    static propTypes = {
      height: T.number.isRequired,
      width: T.number.isRequired,
      xStep: T.number.isRequired,
      data: T.array.isRequired,
      children: T.any,
    }

    static defaultProps = {
      xStep: 20,
    }

    state = {
      posX: -10000,
      posY: -10000,
      popupData: { date: '', increment: '' },
    }

    static displayName = `WithScaledData(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    //general scaling rules
    scaleX = x => x * this.props.width / (this.props.data.length - 1)
    scaleY = y => this.props.height - y * this.props.height / 100

    //Methods for getting grind lines ranges
    getRangeX = data => data.map((x, i) => this.scaleX(i))
    getRangeY = () => range(0, 101, this.props.xStep).map(y => this.scaleY(y))

    //Methods for getting axes data
    getAxisXData = data =>
      data.map(({ x }, i) => ({
        value: x,
        x: this.scaleX(i),
      }))
    getAxisYData = () =>
      range(0, 101, this.props.xStep).map(value => ({
        y: this.scaleY(value),
        value,
      }))

    //Method to get chart data
    getDataPoints = data =>
      data.map(({ y }, i) => ({
        x: this.scaleX(i),
        y: this.scaleY(y),
      }))

    //Prepare data for popup
    getPopupData = data =>
      data.map(({ x, y }, i) => {
        const previousData = data[i - 1] || { y } //Hardcode previous value for first datapoint
        const increment = y - previousData.y
        return {
          date: x,
          x: this.scaleX(i),
          increment,
          posY: this.scaleY(y),
        }
      })

    onMouseMove = e => {
      const { data } = this.props
      const { x } = this.node.getBoundingClientRect()
      const mousePos = e.clientX - x

      const dataPoints = data.map((data, i) => this.scaleX(i))
      const posX = dataPoints.reduce(
        (prev, curr) => (Math.abs(curr - mousePos) < Math.abs(prev - mousePos) ? curr : prev)
      )

      const { posY, date, increment } = this.getPopupData(data).find(({ x }) => x === posX)

      this.setState({
        posX,
        posY,
        popupData: { date, increment },
      })
    }

    onMouseLeave = () => {
      this.setState({ posX: -10000, posY: -10000, popupData: { date: '', increment: '' } })
    }

    setRef = node => (this.node = node)

    render() {
      const { data } = this.props

      if (type === 'simple')
        return <WrappedComponent scaledData={this.getDataPoints(data)} {...this.props} />

      return (
        <WrappedComponent
          {...this.state}
          setRef={this.setRef}
          onMouseMove={this.onMouseMove}
          onMouseLeave={this.onMouseLeave}
          axisXData={this.getAxisXData(data)}
          axisYData={this.getAxisYData(data)}
          rangeX={this.getRangeX(data)}
          rangeY={this.getRangeY(data)}
          scaledData={this.getDataPoints(data)}
          {...this.props}
        />
      )
    }
  }
