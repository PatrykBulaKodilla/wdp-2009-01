import { connect } from 'react-redux';
import HotDeals from './HotDeals';
import { changeFavorite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeFavorite: (favorite, id) => dispatch(changeFavorite(favorite, id)),
});

export default connect(null, mapDispatchToProps)(HotDeals);
