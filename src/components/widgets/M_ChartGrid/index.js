import React from 'react'
import T from 'prop-types'

import A_ChartLine from 'A_ChartLine'

const M_ChartGrid = ({ xRange, yRange, left, right, top, bottom }) => {
  const yMax = Math.max(...yRange)
  const xMax = Math.max(...xRange)

  const slicedXRange = xRange.slice(left ? 0 : 1, right ? xRange.length : xRange.length - 1)
  const slicedYRange = yRange.slice(top ? 0 : 1, bottom ? yRange.length : yRange.length - 1)

  return (
    <g>
      {slicedXRange.map(x => (
        <A_ChartLine type="grid" key={x} data={[{ x, y: 0 }, { x, y: yMax }]} />
      ))}
      {slicedYRange.map(y => (
        <A_ChartLine type="grid" key={y} data={[{ x: 0, y }, { x: xMax, y }]} />
      ))}
    </g>
  )
}

M_ChartGrid.propTypes = {
  xRange: T.array.isRequired,
  yRange: T.array.isRequired,
  left: T.bool,
  right: T.bool,
  top: T.bool,
  bottom: T.bool,
}

M_ChartGrid.defaultProps = {
  left: true,
  right: true,
  top: true,
  bottom: true,
}

export default M_ChartGrid
