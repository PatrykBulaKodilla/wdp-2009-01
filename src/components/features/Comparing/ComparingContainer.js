import { connect } from 'react-redux';
import Comparing from './Comparing';
import { deleteComparing, getAll } from '../../../redux/comparingReducer';

const mapStateToProps = state => ({
  comparedProducts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  deleteComparing: (payload, id) => dispatch(deleteComparing(payload, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comparing);
