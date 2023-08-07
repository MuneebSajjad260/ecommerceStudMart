import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    marginHorizontal: theme.MARGINS.hy10,
    paddingTop: theme.SIZES.height * 0.02,
  },
  emptyScroll: {
    paddingHorizontal: theme.MARGINS.hy20,
    paddingVertical: theme.SIZES.height * 0.05,
    //alignItems:'center',
    justifyContent: "center",
    flex: 1,
  },
  imgCont: {
    alignItems: "center",
    marginBottom: theme.MARGINS.hy40,
  },
  emptyTxt: {
    textAlign: "center",
    ...theme.FONTS.H2,
    color: theme.COLORS.black,
    marginBottom: theme.MARGINS.hy10,
    paddingHorizontal: theme.MARGINS.hy20,
  },
  emptyDesc: {
    ...theme.FONTS.H14,
    textAlign: "center",
    paddingHorizontal: theme.MARGINS.hy20,
    color: theme.COLORS.gray1,
  },
});

export default styles;
