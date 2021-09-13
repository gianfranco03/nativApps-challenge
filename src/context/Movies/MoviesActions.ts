import axios from '../../plugins/axios';

import * as actionTypes from './MoviesActionsTypes';
import { IMoviesParams } from './MoviesTypes';

export const setLoading = (loading: boolean): any => ({
  type: actionTypes.GET_MOVIES_LOADING,
  loading,
});

export const setError = (error: any): any => ({
  type: actionTypes.GET_MOVIES_ERROR,
  error,
});

export const setData = (payload: Array<any>): any => ({
  type: actionTypes.GET_MOVIES_SUCCESS,
  payload,
});

export const getMovies = async (dispatch: any, params: IMoviesParams) => {
  dispatch(setLoading(true));

  try {
    const response = await axios({
      method: 'get',
      params,
    });

    dispatch(setData(response.data?.Search || []));
  } catch (e) {
    dispatch(setError(e));
  }
};
