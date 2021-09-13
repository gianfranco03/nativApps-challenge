import * as actionTypes from './MoviesActionsTypes';

import { IUserStateType, IActionType } from './MoviesTypes';

export const initState: IUserStateType = {
  data: [],
  loading: false,
  error: null
}

export default (state: IUserStateType = initState, action: IActionType): IUserStateType =>{
  switch(action.type){
    case actionTypes.GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case actionTypes.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error
      }
      default:
        return state;
  }
}