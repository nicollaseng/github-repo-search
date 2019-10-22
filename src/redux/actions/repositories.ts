import api from '../../api';
import endpoint from '../../api/endpoints';

import {
  FETCH_ALL_REPOSITORIES_FAILURE,
  FETCH_ALL_REPOSITORIES_SUCCESS,
} from '../../constants/action-types';

export const fetch_repositories = (param: string) => async (
  dispatch: any = {},
) => {
  try {
    const res = await api.get(
      `${endpoint.repositories}?q=${param}&sort=stars&order=desc`,
    );
    if (res.status === 200) {
      dispatch({
        type: FETCH_ALL_REPOSITORIES_SUCCESS,
        payload: res.data.items,
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_ALL_REPOSITORIES_FAILURE,
    });
  }
};
