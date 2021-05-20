import { FETCH_ALL_SHIPS } from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case FETCH_ALL_SHIPS:
      return {
        starships: action.payload,
      };
    default:
      return state;
  }
};
