import { connect } from 'react-redux'

import { getOrdersAction } from '../../store/orders/actions.js'

import Orders from './component.js'

const mapStateToProps = ({ orders }) => ({
  orders
})

const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(getOrdersAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
