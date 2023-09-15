import { StyleSheet } from "react-native";
import { theme } from "../../../constants";


const styles = StyleSheet.create({
  scrollCont: 
    {
        paddingVertical: theme.MARGINS.hy20,
      
  },
  allignItem:
  {alignItems:'center'
},
divider:{
    backgroundColor: 'rgba(130, 130, 130, 0.2)',
    height: 1,
    width: '100%',
    marginVertical:8
},

logoutCont:{

  alignItems:'center',
  marginTop:theme.MARGINS.hy20,
   flexDirection:'row',
   justifyContent:'center'
},

logout:{
...theme.FONTS.H5,
  color:theme.COLORS.error,
  marginLeft:theme.MARGINS.hy10
},

//bottom shett

bsCont: {flex: 1, alignItems: "center", marginTop: 10},
bsTitleTxt: {
  ...theme.FONTS.Font_l,
  color: theme.COLORS.black,
  marginTop: 30,
},
bsDescTxt: {
  ...theme.FONTS.Font_l,
  color: theme.COLORS.black,
  marginTop: theme.MARGINS.marginXParent_xxs,
},
flexDirection: {
  flexDirection: "row",
 
  // alignItems:'center'
},

});

export default styles