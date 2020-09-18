import { connect } from 'react-redux';
import Gallery from './Gallery.js';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
