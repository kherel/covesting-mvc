import React from 'react'
import T from 'prop-types'
import A_ChartArea from 'A_ChartArea'
import A_ChartLine from 'A_ChartLine'
import { curveCardinal } from 'd3-shape'

const M_OutlinedPlot = ({ data, height, gradient, curve, type }) => (
  <g>
    <A_ChartArea data={data} height={height} curve={curve} gradient={gradient} type={type} />
    <A_ChartLine data={data} curve={curve} type={type} />
  </g>
)

M_OutlinedPlot.propTypes = {
  data: T.array,
  height: T.number,
  gradient: T.string,
  curve: T.func,
  type: T.string,
}

M_OutlinedPlot.defaultProps = {
  curve: curveCardinal.tension(0.8),
  type: 'normal',
}

export default M_OutlinedPlot
