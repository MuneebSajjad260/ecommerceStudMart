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

});

export default makeStyles