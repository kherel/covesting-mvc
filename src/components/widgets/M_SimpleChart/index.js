import React from 'react'
import T from 'prop-types'
import A_LinearGradient from 'A_LinearGradient'
import M_OutlinedPlot from 'src/components/widgets/M_OutlinedPlot'
import { AREA_GRADIENT } from 'src/constants/svgConstants'
import withScaledData from 'src/HOC/withScaledData'

const M_SimpleChart = ({ height, width, scaledData }) => (
  <svg height={height} width={width}>
    <defs>
      <A_LinearGradient x1="0%" x2="0%" y1="0%" y2="100%" type={AREA_GRADIENT} />
    </defs>
    <M_OutlinedPlot data={scaledData} type="small" height={height} gradient={AREA_GRADIENT} />
  </svg>
)

M_SimpleChart.propTypes = {
  height: T.number.isRequired,
  width: T.number.isRequired,
  scaledData: T.array.isRequired,
}

export default withScaledData('simple')(M_SimpleChart)
