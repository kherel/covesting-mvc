import { connect } from 'react-redux'
import Page from './page'

function mapStateToProps(state) {
  const { openRoute } = state.navigation
  return { openRoute }
}

export default connect(mapStateToProps)(Page)
