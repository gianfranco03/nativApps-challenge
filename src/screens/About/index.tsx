import React from 'react';
import {View, Text, Linking} from 'react-native';

import Header from '../../components/header';

import i18n from '../../i18n';

import {ABOUT_INFO} from '../../constants/info';

import styles from './About.styles';

const AboutScren: React.FC = () => (
  <>
    <Header title={i18n.t('homeTitle')} subTitle="" />
    <View style={styles.content}>
      <Text style={styles.titleText}>{i18n.t('aboutTitle')}</Text>
      <Text style={styles.textInfo}>
        {i18n.t('aboutUS')}
        {ABOUT_INFO.US}
      </Text>
      <Text style={styles.textInfo}>
        {i18n.t('aboutName')}
        {ABOUT_INFO.NAME}
      </Text>
      <Text
        style={styles.textInfoLink}
        onPress={() => Linking.openURL(ABOUT_INFO.GITHUB_REPO)}>
        {i18n.t('aboutLink')}
      </Text>
    </View>
  </>
);

export default AboutScren;
