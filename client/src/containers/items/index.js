import { connect } from 'react-redux'

import { getItemsAction } from '../../store/items/actions.js'

import Items from './component.js'

const mapStateToProps = ({ items }) => ({ items })

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getItemsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
