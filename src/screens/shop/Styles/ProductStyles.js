import {StyleSheet} from "react-native";
import {theme} from "../../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    marginHorizontal: theme.MARGINS.marginXParent_xl,
    paddingTop: theme.SIZES.height * 0.02,
  },
  bsCont: {flex: 1, alignItems: "center", marginTop: 30},
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  
  heading: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.black,
  },
  flexDirection: {
    flexDirection: "row",
    // alignItems:'center'
  },
  imageContainer: {
    // width:'auto',
    // height:'auto',
    width: 53,
    height: 51,
    padding: 12,
    backgroundColor: theme.COLORS.lightGray,
    borderRadius: 8,
  },
  bsCont: {flex: 1, alignItems: "center", marginTop: 30},
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  deliveryContainer: {
    marginHorizontal: theme.MARGINS.marginXParent_xl,
    paddingTop: theme.SIZES.height * 0.02,
  },
  heading: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.black,
  },
  flexDirection: {
    flexDirection: "row",
    // alignItems:'center'
  },
  imageContainer: {
    // width:'auto',
    // height:'auto',
    width: 53,
    height: 51,
    padding: 12,
    backgroundColor: theme.COLORS.lightGray,
    borderRadius: 8,
  },
  productDetailCont: {
    marginLeft: 12,
  },
  storeName: {
    ...theme.FONTS.Mulish_400Regular,
    // justifyContent: "flex-start",
    // flex: 1,
    fontSize: theme.FONTS.size_m,
    color: theme.COLORS.black,
    // width: 100,
    // flex:1
  },
  prodRating:{
    marginTop: 5

  },
  quantity: {
    ...theme.FONTS.Mulish_400Regular,
    justifyContent: "flex-start",
    color: theme.COLORS.black,

    fontSize: theme.FONTS.size_sm,

  },
  prodPrice: {
    ...theme.FONTS.Mulish_600SemiBold,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.appColor,
  },
  priceCont: {
    marginTop: theme.MARGINS.marginXParent_xs,
  },
  priceContALLign: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.MARGINS.marginXParent_xxs,
    flexDirection: "row",
  },
  itemNo: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.taxCount,
    marginLeft: 3,
  },
  deliveryMethodsAllign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.MARGINS.marginXParent_s,
  },
  deliveryTab: {
    width: 155,
    height: 50,
    paddingHorizontal: theme.MARGINS.marginXParent_s,
    paddingVertical: theme.MARGINS.marginXParent_sm,
    borderWidth: 1,

    borderRadius: 8,
  },

  shipText: {
    ...theme.FONTS.H14,
    marginLeft: theme.MARGINS.marginXParent_s,
    color: theme.COLORS.black,
  },
  tickCont: {
    alignItems: "flex-end",
    flex: 1,
  },
  shippingChargesCont: {
    marginTop: theme.MARGINS.marginXParent_sm,
    flexDirection: "row",
    alignItems: "center",
  },
  shippingChargesText: {
    ...theme.FONTS.H10,
    marginLeft: theme.MARGINS.marginXParent_xxxs,
    color: "#A7A7A7",
  },
  input: {
    width: "47%",
  },
  fieldCont: {
    marginTop: theme.MARGINS.hy20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sellerDetail: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_s,
    color: theme.COLORS.secondryTextColor,
    marginTop: theme.MARGINS.hy5,
  },
  locationCont: {
    height: 45,
    marginTop: 16,
    flexDirection: "row",
  },
  location: {justifyContent: "center"},
  locationContent: {justifyContent: "space-between", marginLeft: 17},
  pickupHeading: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.secondryTextColor,
    marginTop: theme.MARGINS.hy5,
  },
  pickupDesc: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  orderSummary: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  OrderSuccessfulCont: {
    //alignItems:'center',
  },
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
  btn: {width: "40%"},
  footer: {
    position: 'absolute',
  bottom: 0,
    right: 0,
    left: 0,
  },
});

export default styles;
