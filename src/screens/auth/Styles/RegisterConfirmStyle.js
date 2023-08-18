import { StyleSheet, useColorScheme } from 'react-native'
import { theme } from '../../../constants/theme';
import getThemedColors from "../../../utils/themeMode";

const makeStyles = (apColors) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: apColors.appBg
    },
    footer: {
        marginHorizontal: 20
    },
    browse: { marginBottom: 20 },
    contentFooter: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 50,
        alignSelf: "center"
    },
    haveAccount: {
        ...theme.FONTS.Mulish_400Regular,
        fontSize: 16,
        color: apColors.gray1,
        marginRight: 3,
    },
    errorText: {
        ...theme.FONTS.Mulish_400Regular,
        fontSize: 12,
        lineHeight: 12 * 1.5,
        color: apColors.redCBg,
    },
    signinText: {
        ...theme.FONTS.Mulish_400Regular,
        fontSize: 16,
        color: apColors.black,
    },
    btnNext: { marginBottom: 20 },
    footerView: {
        width: "100%",
        position: "absolute",
        bottom: 40,
        alignSelf: "center"
    },
    emailSentText: {
        marginBottom: 80,
        color: apColors.black,
        fontSize: theme.FONTS.dF_m,
    },
    emailSentView: {
        paddingHorizontal: 20,
        paddingVertical: theme.SIZES.height * 0.06,
        flexGrow: 1,
    },
    bold: { fontWeight: 'bold' }
});

export default makeStyles