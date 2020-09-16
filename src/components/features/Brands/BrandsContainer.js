import { connect } from 'react-redux';
import Brands from './Brands';

import { currentRwdMode } from '../../../redux/responsiveRedux.js';

const mapStateToProps = state => ({
  brands: state.brands,
  currentRwdMode: currentRwdMode(state),
});

export default connect(mapStateToProps)(Brands);
