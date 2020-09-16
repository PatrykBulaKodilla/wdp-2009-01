import { connect } from 'react-redux';

import Promotion from './Promotion';

const mapStateToProps = state => ({
  promotionLeftBox: state.promotionLeftBox,
  promotionRightBoxTop: state.promotionRightBoxTop,
  promotionRightBoxBottom: state.promotionRightBoxBottom,
});

export default connect(mapStateToProps)(Promotion);
