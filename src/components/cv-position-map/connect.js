import { connect } from 'react-redux'
import Map from './map'

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Map)