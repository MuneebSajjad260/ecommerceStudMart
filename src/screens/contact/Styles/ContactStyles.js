import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
  },
  scrollCont: 
  {
      marginTop: theme.MARGINS.hy20,
      marginBottom:theme.MARGINS.hy40,
      paddingHorizontal : theme.MARGINS.hy10,
      justifyContent:'space-between',
      flex:1
    
},
heading:{
    ...theme.FONTS.Font_l,
    color:theme.COLORS.black,
    marginTop:theme.MARGINS.hy30

},
desc:{
    ...theme.FONTS.H14,
    color:theme.COLORS.secondryTextColor,
    marginTop:theme.MARGINS.hy10
},
contactIcon:{
alignItems:'center',
marginTop:theme.MARGINS.hy20
},
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

export default styles;
