import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from './page'
import { toggleMenu } from 'store/entities/navigation/actions'

function mapStateToProps(state) {
  const { isMenuOpened, openRoute } = state.navigation
  const theme = openRoute.length === 0 ? 'dark' : 'white'

  return { isMenuOpened, openRoute, theme }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ toggleMenu }, dispatch)
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
