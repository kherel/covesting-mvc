import React from 'react'
import T from 'prop-types'
import { cssClassName } from 'utils'
import './style.scss'
import A_SvgText from 'A_SvgText'
import { rect } from 'd3-shape'
import { formatDate } from 'utils/dateHelpers'

const cn = cssClassName('M_ChartPopup')

const M_ChartPopup = ({ posX, posY, alignment, data: { date, increment }, shadowId }) => {
  const marginX = alignment === 'right' ? 15 : -110
  const marginY = -20
  const textPaddingX = 13
  const textPaddingY = 7
  const positive = increment > 0

  return (
    <g className={cn()}>
      <rect
        style={{ filter: `url(#${shadowId})` }}
        className={cn('rect')}
        x={posX + marginX}
        y={posY + marginY}
        rx={4}
        ry={4}
      />
      <A_SvgText
        type="chart-popup"
        x={posX + marginX + textPaddingX}
        y={posY + marginY + textPaddingY}
        textAnchor="left"
        alignmentBaseline="hanging"
      >
        {formatDate(date, 'D MMM YYYY')}
      </A_SvgText>
      <A_SvgText
        type="chart-popup"
        x={posX + marginX + textPaddingX}
        y={posY + marginY + textPaddingY + 18} //18 is line-height + 3px margin between lines
        textAnchor="left"
        alignmentBaseline="hanging"
        mix={cn('colored-text', { positive })}
      >
        {`${positive ? '+' : ''} ${increment} points`}
      </A_SvgText>
    </g>
  )
}

M_ChartPopup.propTypes = {
  data: T.shape({
    date: T.string,
    increment: T.number,
  }).isRequired,
  posX: T.number.isRequired,
  posY: T.number.isRequired,
  shadowId: T.string.isRequired,
  alignment: T.oneOf(['left', 'right']),
}

M_ChartPopup.defaultProps = {
  alignment: 'right',
}

export default M_ChartPopup
