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
heading:{
    ...theme.FONTS.Mulish_400Regular,
    fontSize:theme.FONTS.dF_xl,
    color:theme.COLORS.black

},
desc:{
    ...theme.FONTS.H14,
    color:theme.COLORS.secondryTextColor,
    marginTop:theme.MARGINS.hy10
}

});

export default styles;
