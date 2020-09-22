import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

import { currentRwdMode } from '../../../redux/responsiveRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  currentRwdMode: currentRwdMode(state),
});

export default connect(mapStateToProps)(NewFurniture);
