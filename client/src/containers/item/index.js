import { connect } from 'react-redux'

import { getItemAction } from '../../store/item/actions.js'

import Item from './component.js'

const mapStateToProps = ({ item }) => ({
  item
})

const mapDispatchToProps = (dispatch) => ({
  getItem: (id) => dispatch(getItemAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
