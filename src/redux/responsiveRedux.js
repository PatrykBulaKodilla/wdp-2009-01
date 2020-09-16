export const currentRwdMode = ({ rwd }) => rwd.mode;

const reducerName = 'responsiveMode';
const createActionName = name => `app/${reducerName}/${name}`;

const SET_RESPONSIVE_MODE = createActionName('SET_RESPONSIVE_MODE');

export const setResponsiveMode = payload => ({ payload, type: SET_RESPONSIVE_MODE });

export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_RESPONSIVE_MODE: {
      return {
        ...statePart,
        mode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
