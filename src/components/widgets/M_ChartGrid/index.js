import React from 'react'
import T from 'prop-types'

import A_ChartLine from 'A_ChartLine'

const M_ChartGrid = ({ xRange, yRange }) => {
  const yMax = Math.max(...yRange)
  const xMax = Math.max(...xRange)

  return (
    <g>
      {xRange.map(x => <A_ChartLine type="grid" key={x} data={[{ x, y: 0 }, { x, y: yMax }]} />)}
      {yRange.map(y => <A_ChartLine type="grid" key={y} data={[{ x: 0, y }, { x: xMax, y }]} />)}
    </g>
  )
}

M_ChartGrid.propTypes = {
  xRange: T.array.isRequired,
  yRange: T.array.isRequired,
}

export default M_ChartGrid
