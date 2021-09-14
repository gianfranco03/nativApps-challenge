import React from 'react';
import {StatusBar, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';

import styles from './styles';

const uri =
  'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

const Header = (props:{title: string; subTitle: string}): JSX.Element => {
  const {title, subTitle} = props;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{
          uri,
        }}
        style={styles.titleImage}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubTitle}>{subTitle}</Text>
      </ImageBackground>
    </>
  );
};

export default Header;
