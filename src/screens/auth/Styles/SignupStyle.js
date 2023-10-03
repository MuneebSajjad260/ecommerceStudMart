import { StyleSheet, useColorScheme } from 'react-native'
import { theme } from '../../../constants/theme';
import getThemedColors from "../../../utils/themeMode";

const makeStyles = (apColors) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: apColors.appBg,
  },
  contentScroll: {
    flexGrow: 1,
    marginHorizontal: 20,
    paddingTop: theme.SIZES.height * 0.02,
    backgroundColor: apColors.appBg,
  },
  errorText: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 12,
    lineHeight: 12 * 1.5,
    color: apColors.redCBg,
  },
  errorMsg: {
    backgroundColor: apColors.appBg,
    padding: 5,
    borderRadius: 16,
    marginBottom: 8
  },
  signinText: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 16,
    color: apColors.black,
  },
  btnNext: { marginBottom: 20, },
  footerView: {
    width: "100%",
   // position: "absolute",
   // bottom: 40,
    alignSelf: "center",
    marginTop:theme.MARGINS.hy20
  }
});

export default makeStyles