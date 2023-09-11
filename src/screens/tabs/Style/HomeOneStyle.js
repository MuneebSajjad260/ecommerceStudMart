import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    marginBottom: theme.MARGINS.hy10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    // backgroundColor:"pink",
  },
  bannerView: {
    width: "100%",
    height: 150,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sellerImageContainer: {
    width: 200,
    height: 250,
    marginBottom: 6,
    backgroundColor: theme.COLORS.lightBlue2,
  },
  filterView: {
    marginRight: 12,
    borderWidth: 1,
    borderColor: theme.COLORS.lightGray,
    padding: 8,
    borderRadius: 8,
    margin: 5,
  },
  categoryView: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: theme.COLORS.lightGray,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: 'auto',
    height: 50,
    // justifyContent: "center",
  },
  imageContainer: {
    // width: 53,
    // height: 51,
    // padding: 12,
    // borderRadius: 0,

    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  uniName: {
    ...theme.FONTS.H5, 
    color: theme.COLORS.black,
    width:'80%'
  },
  sellerNo: {
    ...theme.FONTS.Mulish_600SemiBold,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.black,
    marginTop: 10,
    
  },
  sellerTxt: {...theme.FONTS.H14, color: theme.COLORS.black},
  uniBottomView: {
    height: 1,
    width: '90%',
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    paddingHorizontal: 30,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 6,
  },
  uniImage: {
    width: '100%',
    height: 150,
    marginBottom: 6,
    backgroundColor: theme.COLORS.lightBlue2,
    borderRadius: 8,
  },
  uniCont: {
    flex: 1,
    width:171,
    margin: 6,
    height:250,
    borderWidth: 1,
    borderColor: "rgba(20, 0, 35, 0.1)",
    padding: 8,
    borderRadius: 15,

  }
});

export default styles;
