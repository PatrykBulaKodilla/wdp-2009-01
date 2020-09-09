import { connect } from 'react-redux';
import Promo from './Promo';
import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Promo);
