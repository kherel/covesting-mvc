import React from 'react'
import T from 'prop-types'
import A_LinearGradient from 'A_LinearGradient'
import { barChartGradients } from 'src/constants/svgConstants'
import A_ChartArea from 'A_ChartArea'
import { cssClassName } from 'src/utils/index'
import './style.scss'
import A_ChartLine from 'A_ChartLine'
import A_SvgText from 'A_SvgText'
const cn = cssClassName('M_BarChart')

const M_BarChart = ({ height, width, data, barWidth, margin, mx }) => {
  const verticalPadding = 24

  return (
    <svg className={cn([mx])} {...{ height, width }}>
      <defs>
        {barChartGradients.map(gradient => <A_LinearGradient key={gradient} type={gradient} />)}
      </defs>

      {data.map((value, i) => {
        const y = (barWidth + margin) * i
        return (
          <g key={i}>
            <A_ChartArea
              height={(margin + barWidth) * i + barWidth}
              data={[{ x: 0, y }, { x: value * width / Math.max(...data), y }]}
              gradient={barChartGradients[i]}
            />
            <A_SvgText
              x={30}
              y={y + 10}
              alignmentBaseline="hanging"
              textAnchor="start"
              type="bar-chart"
            >{`${value} %`}</A_SvgText>
          </g>
        )
      })}

      <A_ChartLine
        data={[{ x: 0, y: -verticalPadding }, { x: 0, y: height + verticalPadding }]}
        type="border"
      />
    </svg>
  )
}

M_BarChart.propTypes = {
  height: T.number.isRequired,
  width: T.number.isRequired,
  data: T.array.isRequired,
  barWidth: T.number,
  margin: T.number,
  mx: T.string,
}

M_BarChart.defaultProps = {
  barWidth: 32,
  margin: 10,
}

export default M_BarChart
