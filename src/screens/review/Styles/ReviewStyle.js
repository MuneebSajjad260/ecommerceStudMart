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
    
},
rating:{
    ...theme.FONTS.H48,
    color:theme.COLORS.black,
   alignSelf:'center'
},
starCont:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starRating: {
    flexDirection: 'row',
  },

});

export default styles;
