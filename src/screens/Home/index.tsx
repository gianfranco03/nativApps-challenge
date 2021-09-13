import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import { useMovies } from '../../context/Movies/MoviesState';
import { getMovies } from '../../context/Movies/MoviesActions';

const HomeScren: React.FC = (): JSX.Element => {
  const [moviesState, moviesDisparch] = useMovies();
  const { data, loading, error } = moviesState;

  useEffect(() => {
    getMovies(moviesDisparch, {
      s: 'Love',
      y: '2020',
      type: 'movie',
    });
  }, []);

  console.log('data', data.length);
  console.log('loading', loading);
  console.log('error', error);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScren;
