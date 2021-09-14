import React, {useEffect, useState} from 'react';
import {View, FlatList, Image, ActivityIndicator} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../components/header';

import {useMovies} from '../../context/Movies/MoviesState';
import {getMovies} from '../../context/Movies/MoviesActions';

import i18n from '../../i18n';

import styles from './Home.styles';
import colors from '../../constants/colors';

const HomeScren: React.FC = (): JSX.Element => {
  const [moviesState, moviesDisparch] = useMovies();
  const {data, loading, error} = moviesState;

  const [params, setParams] = useState({
    s: 'Love',
    y: '2020',
    type: 'movie',
  });

  useEffect(() => {
    _getMovies();
  }, []);

  const _getMovies = () => {
    getMovies(moviesDisparch, params);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <Image
          source={{uri: item.Poster}}
          style={styles.itemImage}
          resizeMode="stretch"
        />
        <View style={styles.itemInfoContainer}>
          <Text>{item.Title}</Text>
          <View style={styles.itemInfoRow}>
            <Text>{`${i18n.t('homeItemType')}${item.Type}`}</Text>
            <Text>{`${i18n.t('homeItemYear')}${item.Year}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  const ItemSeparatorComponent = () => (
    <View style={styles.listItemSeparator} />
  );

  const ListFooterComponent = () => <View style={styles.listFooter} />;

  const ListEmptyComponent = () => (
    <View style={styles.noDataContainer}>
      {error ? (
        <>
          <Text>{i18n.t('homeErrorFetch')}</Text>
          <Button
            style={styles.button}
            color={colors.white}
            onPress={_getMovies}>
            {i18n.t('homeAcceptButton')}
          </Button>
        </>
      ) : (
        <>
          <Ionicons name="sad-outline" size={60} color="gray" />
          <Text style={styles.noDataText}>{i18n.t('homeNoData')}</Text>
        </>
      )}
    </View>
  );

  const renderLoading = () => (
    <View style={styles.noDataContainer}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title={i18n.t('homeTitle')}
        subTitle={`${i18n.t('homeSubTite1')}${params.s} ${i18n.t(
          'homeSubTite2',
        )}${params.y}`}
      />
      {loading ? (
        renderLoading()
      ) : (
        <FlatList
          data={data}
          style={styles.list}
          columnWrapperStyle={styles.listWrapper}
          ItemSeparatorComponent={ItemSeparatorComponent}
          numColumns={2}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={item => item.imdbID}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default HomeScren;
