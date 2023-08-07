import {StyleSheet} from "react-native";
import {theme} from "../../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    
    marginHorizontal: theme.MARGINS.hy10,
    marginTop: theme.MARGINS.hy20,
   
  },
  wrapperStyle:{justifyContent: "space-between"},
  imageContainer: {
    // width: 53,
    // height: 51,
    // padding: 12,
    // borderRadius: 0,

    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  uniName: {...theme.FONTS.H5, color: theme.COLORS.black},
  sellerNo: {
    ...theme.FONTS.Mulish_600SemiBold,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.black,
    marginTop: 10,
  },
  sellerTxt: {...theme.FONTS.H14, color: theme.COLORS.secondryTextColor},

  uniImage: {
    width: "100%",
    height: 150,
    marginBottom: 6,
    backgroundColor: theme.COLORS.lightBlue2,
    borderRadius: 8,
  },
  uniCont: {
    flex: 1,
    width: theme.SIZES.width,
    margin: 6,
    borderWidth: 1,
    borderColor: "rgba(20, 0, 35, 0.1)",
    padding: 8,
    borderRadius: 15,
  },
  uniLength:{
    ...theme.FONTS.H14,
    color:theme.COLORS.secondryTextColor,
    marginBottom:theme.MARGINS.hy10,
    marginLeft:6
  }
});

export default styles;
