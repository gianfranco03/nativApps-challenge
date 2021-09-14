import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleImage: {
    width: '100%',
    alignItems: 'center',
    ...Platform.select({
      android: {
        height: hp(18),
        justifyContent: 'center',
      },
      ios: {
        height: hp(20),
        justifyContent: 'flex-end',
        paddingBottom: hp(4),
      },
    }),
  },
  textTitle: {
    color: colors.white,
    fontSize: wp(6),
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  textSubTitle: {
    marginTop: hp(1),
    color: colors.white,
    fontSize: wp(5),
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
});

export default styles;
