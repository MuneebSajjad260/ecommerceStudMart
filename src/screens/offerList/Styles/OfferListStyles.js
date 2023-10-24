import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
   
 
  },
  scrollCont: 
  {
        paddingBottom: theme.MARGINS.hy20,

},
rating:{
    ...theme.FONTS.H48,
    color:theme.COLORS.black,
   alignSelf:'center'
},
avgRating:{
  ...theme.FONTS.H12,
  color:theme.COLORS.secondryTextColor,
 alignSelf:'center',
 marginTop:theme.MARGINS.hy5,

},
starCont:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    
},
container: {
  //  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starRating: {
    flexDirection: 'row',
  },

});

export default styles;
