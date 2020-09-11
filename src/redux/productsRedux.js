import update from 'immutability-helper';

/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getDeals = ({ products }) => {
  const index = products.findIndex(product => product.hotDeal === true);
  const hotDeal = products.find(product => product.hotDeal === true);
  hotDeal.index = index;
  return hotDeal;
};

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');
const CHANGE_RATING = createActionName('CHANGE_RATING');

/* action creators */
export const changeFavorite = (payload, id) => ({ payload, id, type: CHANGE_FAVORITE });
export const changeRating = (payload, id) => ({ payload, id, type: CHANGE_RATING });
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE:
      return update(statePart, {
        [action.id]: {
          favorite: { $set: action.payload },
        },
      });
    case CHANGE_RATING:
      return update(statePart, {
        [action.id]: {
          starsRating: { $set: action.payload },
        },
      });
    default:
      return statePart;
  }
}
