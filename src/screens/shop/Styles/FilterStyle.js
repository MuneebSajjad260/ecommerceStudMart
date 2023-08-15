import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
  },
  contentContainer: {
    marginHorizontal: theme.MARGINS.marginXParent_xl,
    paddingTop: theme.SIZES.height * 0.02,
    justifyContent: "space-between",
    flex: 1,
    marginBottom: theme.MARGINS.hy40,
  },
  sliderCont: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginBottom: theme.MARGINS.hy20,
  },
  alignItem: {alignItems: "center"},
  leftMark: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    backgroundColor: theme.COLORS.black,
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  leftTxt: {
    position: "absolute",
    bottom: -30,
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 14,
    color: theme.COLORS.gray1,
    // lineHeight: 16 * 1.6,
    left: 10,
    width: "150%",
  },
  rightMark: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    backgroundColor: theme.COLORS.black,
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  rightTxt: {
    position: "absolute",
    bottom: -30,
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 14,
    color: theme.COLORS.gray1,
    // lineHeight: 16 * 1.6,
    right: 0,
    width: "150%",
  },
});

export default styles;
