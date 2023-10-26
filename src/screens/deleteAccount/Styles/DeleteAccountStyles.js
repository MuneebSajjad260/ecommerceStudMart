import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
  },
  scrollCont: 
  {
      paddingVertical: theme.MARGINS.hy20,
      paddingHorizontal : theme.MARGINS.hy10,
      justifyContent:'space-between',
      flex:1
    
},
heading:{
    ...theme.FONTS.Mulish_400Regular,
    fontSize:theme.FONTS.dF_xl,
    color:theme.COLORS.black

},
wrapper:{
   
    marginTop:theme.MARGINS.hy10
},
defAlignment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  pointContainer: {
    marginBottom:16,
    //paddingRight: theme.MARGINS.hy10
  },
  dot: {
    backgroundColor: theme.COLORS.error,
    height: 8,
    width: 8,
    borderRadius: 100 / 2,
    marginRight:theme.MARGINS.hy10,
    marginTop: 8,
  },
  pointTxt: {
    ...theme.FONTS.H5,
    color: theme.COLORS.secondryTextColor,
    alignSelf: 'flex-end',
    flex:1
  
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardHeading: {
   ...theme.FONTS.H14
  },
  bsCont: {flex: 1, alignItems: "center", marginTop: 10},
  bsTitleTxt: {
    ...theme.FONTS.H4,
    color: theme.COLORS.black,
   // marginTop: 30,
  },
  bsDescTxt: {
    ...theme.FONTS.H20,
    color: theme.COLORS.secondryTextColor,
    marginTop: theme.MARGINS.marginXParent_xxs,
    textAlign:'center',
    marginHorizontal:theme.MARGINS.hy20
  },

flexDirection: {
  flexDirection: "row",
 
  // alignItems:'center'
},


});

export default styles;
