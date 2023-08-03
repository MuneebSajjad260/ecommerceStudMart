import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    marginHorizontal: theme.MARGINS.hy20,
    marginTop: theme.MARGINS.hy20,
  },
  flexDirection: {
    flexDirection: 'row',
    // alignItems:'center'
  },
  bsCont: {flex: 1,
     alignItems: 'center',
      marginTop: 30},
  bsTitleTxt: {
    ...theme.FONTS.Font_l,
    color: theme.COLORS.black,
    marginTop: 30,
  },
  bsDescTxt: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    marginTop: theme.MARGINS.marginXParent_xxs,
  },
  btn:{width:'40%'}

});

export default styles;