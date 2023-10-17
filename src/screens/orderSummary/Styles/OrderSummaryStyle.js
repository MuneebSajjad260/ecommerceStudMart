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
  placedBy: {
    ...theme.FONTS.H12,
    color: theme.COLORS.secondryTextColor,
    marginBottom: theme.MARGINS.hy10,
  },
  flexDirection: {
    flexDirection: 'row',
    // alignItems:'center'
  },
  imageContainer: {
    // width:'auto',
    // height:'auto',
    width: 53,
    height: 51,
    padding: 12,
    backgroundColor: theme.COLORS.counterGrey,
    borderRadius: 8,
  },
  userCheck: {
    width: 53,
    height: 51,
    padding: 12,
  },
  productDetailCont: {
    marginLeft: 12,
  },
  prodName: {
    ...theme.FONTS.Mulish_400Regular,
    justifyContent: 'flex-start',
    flex: 1,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.black,

    width: theme.SIZES.rsWidth / 2,
  },
  quantity: {
    ...theme.FONTS.Mulish_400Regular,
    justifyContent: 'flex-start',
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.secondryTextColor,
  },
  prodPrice: {
    ...theme.FONTS.Mulish_600SemiBold,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.appColor,
  },
  heading: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    marginBottom: theme.MARGINS.hy10,
  },
  shippingCont: {
    marginLeft: theme.MARGINS.hy10,
  },
  name: {
    justifyContent: 'flex-start',
    flex: 1,
    ...theme.FONTS.H16,
    color: theme.COLORS.black,
  },
  email: {
    justifyContent: 'flex-start',
    ...theme.FONTS.H14,
    color: theme.COLORS.secondryTextColor,
  },
  cashPayment: {
    ...theme.FONTS.H12,
    color: theme.COLORS.black,
    marginLeft: theme.MARGINS.hy5,
  },
  visaTxt: {
    ...theme.FONTS.H12,
    color: theme.COLORS.secondryTextColor,
    marginLeft: theme.MARGINS.hy5,
  },
  priceCont: {
    marginTop: theme.MARGINS.hy10,
  },
  priceContALLign: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.MARGINS.marginXParent_xxs,
    flexDirection: "row",
  },
  itemNo: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.taxCount,
    marginLeft: 3,
  },
  orderSummary: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  responsibiltyCont: {
    backgroundColor: theme.COLORS.lightRed,
    borderWidth: 1,
    borderColor: theme.COLORS.darkRed,
  },
  responsibilityText: {
    ...theme.FONTS.H14,
    color: theme.COLORS.darkRed,
  },
  responsibilityDesc: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_s,
    color: theme.COLORS.black,
    marginTop: theme.MARGINS.hy5,
  },
  statusTxt: {
    ...theme.FONTS.H12,
    alignSelf: 'center',
    color: theme.COLORS.secondryTextColor,
  },
  status: {
    ...theme.FONTS.H14,
    alignSelf: 'center',
    color: theme.COLORS.black,
  },
  total: {
    ...theme.FONTS.H4,
    color: theme.COLORS.black,
  },
  totalPrice: {
    ...theme.FONTS.H4,
    color: theme.COLORS.appColor,
  },
  divider: {
    marginVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.divider,
  },
  //rating card
  ratingCardCont: {
    borderColor: theme.COLORS.appColor,
    borderWidth: 1,
    backgroundColor: theme.COLORS.appColorXtraLight,
    shadowColor: theme.COLORS.whiteOnly
  },
  ratingTxtCont: {
    flex: 1,
    marginLeft: theme.MARGINS.hy10,
  },
  leaveRatingTxt: {
    ...theme.FONTS.H14,
    color: theme.COLORS.appColor,
  },
  ratingDesc: {
    ...theme.FONTS.H12,
    color: theme.COLORS.black,
    marginTop: 6,
  },
  viewReview:{
    ...theme.FONTS.H14,
    color:theme.COLORS.black
  }
});

export default styles;
