import React, {useContext, useReducer} from 'react';
import {MoviesContext} from './MoviesContext';
import MoviesReducer, {initState} from './MoviesReducer';

export const useMovies = () => {
  const { state, dispatch } = useContext(MoviesContext);
  return [state, dispatch];
};

export const MoviesState = ({children}) => {
  const [state, dispatch] = useReducer(MoviesReducer, initState);

  return (
    <MoviesContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};
