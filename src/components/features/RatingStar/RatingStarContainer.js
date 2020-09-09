import { connect } from 'react-redux';
import RatingStar from './RatingStar';
import { changeRating } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeRating: (payload, id) => dispatch(changeRating(payload, id)),
});

export default connect(null, mapDispatchToProps)(RatingStar);
