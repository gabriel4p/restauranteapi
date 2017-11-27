import { connect } from 'react-redux'

import { postItemAction } from '../../store/item/actions.js'

import NewItem from './component.js'

const mapDispatchToProps = (dispatch) => ({
  postItem: (item) => dispatch(postItemAction(item))
})

export default connect(null, mapDispatchToProps)(NewItem)
