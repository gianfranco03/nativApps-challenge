import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  list: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  listWrapper: {
    justifyContent: 'space-between',
  },
  listItemSeparator: {
    height: hp(2.5),
  },
  listItem: {
    width: wp(44),
    height: hp(42),
    borderRadius: wp(4),
    backgroundColor: colors.white,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 1,
    elevation: 0.5,
  },
  itemImage: {
    width: '100%',
    height: hp(32),
  },
  itemInfoContainer: {
    flex: 1,
    paddingHorizontal: wp(2.2),
    justifyContent: 'center',
  },
  itemInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listFooter: {
    height: hp(4),
  },
  noDataContainer: {
    alignSelf: 'center',
    marginTop: hp(22),
    alignItems: 'center',
  },
  noDataText: {
    marginTop: hp(2),
  },
  button: {
    marginTop: hp(2),
    backgroundColor: colors.primary,
    color: colors.white,
  },
});

export default styles;
