import { StyleSheet, useColorScheme } from 'react-native'
import {theme}  from '../../../constants/theme';
import getThemedColors from "../../../utils/themeMode";

 const makeStyles =(apColors)=> StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    contentContainerStyle:{
        marginHorizontal: 20,
        paddingVertical: theme.SIZES.height * 0.02,
        // paddingBottom: theme.MARGINS.hy20,
        // flexGrow: 1,
      },
    contentStyle:{marginHorizontal: 20, paddingVertical: theme.MARGINS.hy20},
     forgotPassView:{
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
     forgotPassTxt:{
        ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                color: apColors.black,
     }, 
     signupLabel:{
        ...theme.FONTS.Mulish_400Regular,
        fontSize: 16,
        color: apColors.black,
      },
      dontHavAcc:{
        ...theme.FONTS.Mulish_400Regular,
        fontSize: 16,
        color: apColors.gray1,
        marginRight: 3,
      },
      signupView:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40,
        alignSelf:"center",
      },
      errorMsg:{
        // marginHorizontal: 20,
          // marginTop: theme.RES_WIDTH(5),
          backgroundColor: '#f3f3f3',
          padding: 5,
        borderRadius:16,
        marginBottom: 8
        },
        apiError :{
          ...theme.FONTS.Mulish_400Regular,
          fontSize: 12,
          lineHeight: 12 * 1.2,
          color: apColors.redCBg,
          marginVertical: theme.MARGINS.hy5,
          fontWeight:"600",
          alignSelf:"center",
          letterSpacing: 1.05,
          textAlign:"justify",
          paddingHorizontal: 16,
        },
      bsTitleTxt: {
        ...theme.FONTS.Font_l,
        color: theme.COLORS.black,
        marginTop: 30,
        textAlign:"center",
        fontWeight:"800",
        letterSpacing: 1.2,
      },
      bsDescTxt: {
        ...theme.FONTS.H14,
        color: theme.COLORS.black,
        marginTop: theme.MARGINS.marginXParent_xxs,
        textAlign:"center",
        marginHorizontal: 20
      },
      bsCont: {flex: 1, alignItems: 'center', marginTop: 30, marginBottom:50, paddingHorizontal: 16},

});

export default makeStyles