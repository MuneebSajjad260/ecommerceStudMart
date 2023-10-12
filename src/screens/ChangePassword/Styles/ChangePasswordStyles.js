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
     flex:1,
     justifyContent:'space-between'
    
},
inpContainer: {
    borderWidth: 1,
    borderColor: theme.COLORS.border,
  },
  marginBottom:{
    paddingBottom: theme.MARGINS.hy20,
  },

errorMsg: {
    backgroundColor: theme.COLORS.appBg,
    padding: 5,
    borderRadius: 16,
   // marginBottom: 8
  },
  errorTxt: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: 12,
    lineHeight: 12 * 1.5,
    color: theme.COLORS.redCBg,
  },
});

export default styles;
