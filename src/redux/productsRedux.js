import update from 'immutability-helper';

/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_FAVORITE = createActionName('CHANGE_FAVORITE');

/* action creators */
export const changeFavorite = (payload, id) => ({ payload, id, type: CHANGE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_FAVORITE:
      return update(statePart, {
        [action.id]: {
          favorite: { $set: action.payload },
        },
      });

    default:
      return statePart;
  }
}
