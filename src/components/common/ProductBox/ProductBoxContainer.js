import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeFavorite } from '../../../redux/productsRedux';
import { addComparing, getAll } from '../../../redux/comparingReducer';

const mapStateToProps = state => ({
  getAll: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  changeFavorite: (favorite, id) => dispatch(changeFavorite(favorite, id)),
  addComparing: payload => dispatch(addComparing(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
