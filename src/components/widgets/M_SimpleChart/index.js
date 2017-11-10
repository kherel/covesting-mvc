import React from 'react'
import T from 'prop-types'
import A_LinearGradient from 'A_LinearGradient'
import M_OutlinedPlot from 'src/components/widgets/M_OutlinedPlot'
import { areaGradient } from 'constants/svgConstants'
import withScaledData from 'withScaledData'

const M_SimpleChart = ({ height, width, scaledData }) => (
  <svg height={height} width={width}>
    <defs>
      <A_LinearGradient type={areaGradient} />
    </defs>
    <M_OutlinedPlot data={scaledData} type="small" height={height} gradient={areaGradient} />
  </svg>
)

M_SimpleChart.propTypes = {
  height: T.number.isRequired,
  width: T.number.isRequired,
  scaledData: T.array.isRequired,
}

export default withScaledData('simple')(M_SimpleChart)
