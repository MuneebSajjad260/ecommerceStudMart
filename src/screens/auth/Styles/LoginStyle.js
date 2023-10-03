import { StyleSheet, useColorScheme } from 'react-native'
import { theme } from '../../../constants/theme';
import getThemedColors from "../../../utils/themeMode";

const makeStyles = (apColors) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: apColors.appBg,
  },
  contentContainerStyle: {
    flexGrow: 1,
    marginHorizontal: 20,
    paddingTop: theme.SIZES.height * 0.02,
    backgroundColor: apColors.appBg,
  },
  contentStyle: {
    // flex: 1,
    marginHorizontal: 20,
    paddingVertical: theme.MARGINS.hy20,
    // backgroundColor: apColors.appBg,
  },
  forgotPassView: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.MARGINS.hy30,
    marginTop: theme.MARGINS.hy10
  },
  forgotPassTxt: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 16,
    lineHeight: 16 * 1.7,
    color: apColors.black,
  },
  signupLabel: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 16,
    color: apColors.black,
  },
  dontHavAcc: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 16,
    color: apColors.gray1,
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
  errorMsg: {
    backgroundColor: apColors.appBg,
    padding: 5,
    borderRadius: 16,
    marginBottom: 8
  },
  errorTxt: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 12,
    lineHeight: 12 * 1.5,
    color: apColors.redCBg,
  },
  apiError: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 12,
    lineHeight: 12 * 1.2,
    color: apColors.redCBg,
    marginVertical: theme.MARGINS.hy5,
    fontWeight: "600",
    alignSelf: "center",
    letterSpacing: 1.05,
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  bsTitleTxt: {
    ...theme.FONTS.Font_l,
    color: theme.COLORS.black,
    marginTop: 30,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  bsDescTxt: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    marginTop: theme.MARGINS.marginXParent_xxs,
    textAlign: "center",
    marginHorizontal: 20
  },
  bsCont: { flex: 1, alignItems: 'center', marginTop: 30, marginBottom: 50, paddingHorizontal: 16 },
  inpContainer: {
    borderWidth: 1,
    borderColor: apColors.border,
  },
  mTop: { marginTop: theme.MARGINS.hy20, }

});

export default makeStyles