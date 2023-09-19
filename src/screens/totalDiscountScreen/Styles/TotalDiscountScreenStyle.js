import {StyleSheet} from "react-native";
import {theme} from "../../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
  },
  contentCont:{
    marginHorizontal: theme.MARGINS.hy10,
  marginBottom:theme.MARGINS.hy20,
  marginTop:theme.MARGINS.hy40,
  flexGrow:1
  },
  wrapper:{
    paddingHorizontal:theme.MARGINS.hy10,
    paddingTop:theme.MARGINS.hy20,
    flex:1
  },
  disValue:{
  ...theme.FONTS.H36,
  color:theme.COLORS.appColor
},
  desc:{
...theme.FONTS.H12,
color:theme.COLORS.black,
marginTop:30,
width:"100%"
  },
  label:{
    marginTop:theme.MARGINS.hy5,
    ...theme.FONTS.H10,
    color:theme.COLORS.secondryTextColor
  },
  wrapperStyle: {
    justifyContent: 'space-between',
},


});

export default styles;
