import { StyleSheet, useColorScheme } from 'react-native'
import { theme } from '../../../constants/theme';
import getThemedColors from "../../../utils/themeMode";

const makeStyles = (apColors) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg
  },
//   contentContainerStyle: {
//     flexGrow: 1,
//     marginHorizontal: 20,
//     paddingTop: theme.SIZES.height * 0.02,
//     backgroundColor: apColors.appBg,
//   },
errorTxt: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 12,
    lineHeight: 12 * 1.5,
    color: theme.COLORS.redCBg,
  },
  desc:{
    ...theme.FONTS.H5,
    color:theme.COLORS.secondryTextColor
  },
  signupLabel: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 16,
    color: theme.COLORS.black
  },
  dontHavAcc: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 16,
    color: theme.COLORS.gray1,
    marginRight: 3,
  },
  signupView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
   // bottom: 20,
    zIndex: -1,
    marginVertical: theme.MARGINS.hy10,
  },
});

export default makeStyles