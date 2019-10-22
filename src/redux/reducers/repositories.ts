import {
  FETCH_ALL_REPOSITORIES_FAILURE,
  FETCH_ALL_REPOSITORIES_SUCCESS,
} from '../../constants/action-types';
import {updateObject} from './utility';

const initialState = {
  loading: false,
  repositories: [],
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_ALL_REPOSITORIES_SUCCESS:
      return updateObject(state, {
        repositories: action.payload,
        loading: false,
      });
    case FETCH_ALL_REPOSITORIES_FAILURE:
      return {...initialState};
    default:
      return state;
  }
}
