import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    marginHorizontal: theme.MARGINS.hy20,
    paddingTop: theme.SIZES.height * 0.02,
  },
  wrapperCont: {
    marginBottom: 14,
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upper: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  placedOn: {
    ...theme.FONTS.H12,
    color: theme.COLORS.secondryTextColor,
    marginTop: 4,
  },
  prodName: {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,
    marginTop: 15,
  },
  price: {
    ...theme.FONTS.H5,
    color: theme.COLORS.appColor,
    marginTop: 15,
  },

  //FILTER CONTAINER STYLING

  filterCont: {
    alignSelf: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(20, 0, 35, 0.1)',
    marginTop: theme.MARGINS.hy20,
    marginLeft: 8,
  },
  status: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  
});

export default styles;
