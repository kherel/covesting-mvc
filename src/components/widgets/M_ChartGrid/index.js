import React from 'react'
import T from 'prop-types'

import A_ChartLine from 'A_ChartLine'

const M_ChartGrid = ({ rangeX, rangeY, left, right, top, bottom }) => {
  const yMax = Math.max(...rangeY)
  const xMax = Math.max(...rangeX)

  //Filter borders
  const slicedXRange = rangeX.slice(left ? 0 : 1, right ? rangeX.length : rangeX.length - 1)
  const slicedYRange = rangeY.slice(top ? 0 : 1, bottom ? rangeY.length : rangeY.length - 1)

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
  rangeX: T.array.isRequired,
  rangeY: T.array.isRequired,
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
