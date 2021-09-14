import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  content: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  titleText: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  textInfo: {
    fontSize: wp(4.5),
    marginBottom: hp(1),
  },
  textInfoLink: {
    fontSize: wp(4.5),
    marginBottom: hp(1),
    textDecorationLine: 'underline',
  },
});

export default styles;
