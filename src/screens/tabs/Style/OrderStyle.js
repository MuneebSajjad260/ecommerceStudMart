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
  scroll: {
    paddingHorizontal: theme.MARGINS.hy20,
    paddingTop: theme.MARGINS.hy20,
  },
  card: {
    //width: "100%",
   // height: 100,
  //  flexDirection: "row",
  //  alignItems: "center",
   // justifyContent: "space-between",
    marginBottom: theme.MARGINS.hy20,
   // paddingRight:theme.MARGINS.hy20,
   

  },
  flexDirection: {
    flexDirection: "row",
    // alignItems:'center'
  },
  heading: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.black,
  },
  imageContainer: {
    // width:'auto',
    // height:'auto',
    width: 71,
    height: 74,
   padding: 12,
    backgroundColor: theme.COLORS.counterGrey,
    borderRadius: 8,
  },
  productDetailCont: {
    marginLeft: 12,
  },
  prodName: {
    ...theme.FONTS.Mulish_400Regular,
    // justifyContent: "flex-start",
    // flex: 1,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.black,
    width:'90%'
  },
  quantity: {
    ...theme.FONTS.Mulish_400Regular,
    // justifyContent: "flex-end",
    color: theme.COLORS.black,

    fontSize: theme.FONTS.size_sm,
  },
  prodPrice: {
    ...theme.FONTS.Mulish_600SemiBold,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.appColor,
    // justifyContent: "flex-start",
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
  prodCont: {justifyContent: 'flex-start', flex: 1},
  counterCont: {
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '100%',
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    padding: theme.MARGINS.hy5,
    backgroundColor: theme.COLORS.counterGrey,
    borderRadius: 20,
  },
  sign: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
  },
  itemQuantity: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.dF_xl,
    color: theme.COLORS.black,
    marginHorizontal: theme.MARGINS.hy20,
  },
  lowerCont: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  lowerAllign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
   
  },
  promoCard: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',

  },
  priceSection: {
    marginTop: theme.MARGINS.hy20,
  },
  apply: {
    ...theme.FONTS.H14,
    color: theme.COLORS.appColor,
  },
  inputTxt: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
    width: "80%",
  },
  priceCont: {
    marginTop: theme.MARGINS.marginXParent_xs,
  },
  priceContALLign: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.MARGINS.marginXParent_xxs,
    flexDirection: 'row',
  },
  itemNo: {
    ...theme.FONTS.Mulish_400Regular,
    fontSize: theme.FONTS.size_sm,
    color: theme.COLORS.taxCount,
    marginLeft: 3,
  },
  orderSummary: {
    ...theme.FONTS.H14,
    color: theme.COLORS.black,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  //EMPTY CART STYLES
  emptyContainer: {
     paddingHorizontal: 20,
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
marginTop:100
 
  },
  cartCont: {
    alignItems: "center",
    marginBottom: theme.MARGINS.hy40,
  },
  cartEmptyTxt: {
    textAlign: "center",
    ...theme.FONTS.H2,
    color: theme.COLORS.black,
    // paddingHorizontal: 60,
    marginBottom: 14,
  },
  descTxt: {
    textAlign: "center",
    ...theme.FONTS.H14,
    color: theme.COLORS.gray1,
    lineHeight: 16 * 1.7,
    // paddingHorizontal: 50,
    marginBottom: 30,
  },
});

export default styles;
