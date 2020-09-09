import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeFavorite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeFavorite: (favorite, id) => dispatch(changeFavorite(favorite, id)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
