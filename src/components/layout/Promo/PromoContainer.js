import { connect } from 'react-redux';
import Promo from './Promo';
import { getDeals } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getDeals(state),
});

export default connect(mapStateToProps)(Promo);
