/* selectors */
export const getAll = ({ comparing }) => comparing;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_COMPARING = createActionName('ADD_COMPARING');
const DELETE_COMPARING = createActionName('DELETE_COMPARING');

/* action creators */
export const addComparing = payload => ({ payload, type: ADD_COMPARING });
export const deleteComparing = (payload, id) => ({
  payload,
  id,
  type: DELETE_COMPARING,
});
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COMPARING:
      return [...statePart, action.payload];
    case DELETE_COMPARING:
      return [...statePart, ...statePart.slice(action.id, action.id)];
    default:
      return statePart;
  }
}
