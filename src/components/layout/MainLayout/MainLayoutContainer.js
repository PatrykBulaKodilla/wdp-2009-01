import { connect } from 'react-redux';

import MainLayout from './MainLayout';
import { currentRwdMode, setResponsiveMode } from '../../../redux/responsiveRedux.js';

const mapStateToProps = state => ({
  currentRwdMode: currentRwdMode(state),
});

const mapDispatchToProps = dispatch => ({
  setResponsiveMode: mode => dispatch(setResponsiveMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
