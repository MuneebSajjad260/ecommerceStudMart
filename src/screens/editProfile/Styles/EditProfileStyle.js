import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:theme.COLORS.appBg,
   
  },
imgCont:
{
    width: 126,
    height: 126,
    margin:theme.MARGINS.hy20,
    alignSelf: 'center',
  },
  img:
  {width: '100%', height: '100%'},
  imgStyle:
  {
    borderWidth: 6,
    borderColor: theme.COLORS.lightBlue1,
  },
  camCont:
  {position: 'absolute', right: 6, bottom: 6},

  personalInfoCont:
  {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  personalInfoTxt:
  {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,
    marginLeft: theme.MARGINS.hy5,
  },
  paddingHor:
  {paddingHorizontal: 20},
  marginBottom:
  {marginBottom: theme.MARGINS.hy20},

addressCont:
{
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  addressTxt:
  {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,
    marginLeft: theme.MARGINS.hy5,
  },
  allignRow:
  {
    marginTop: theme.MARGINS.hy20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

width:
{width: "47%"},

btnCont:
{
    marginTop: theme.MARGINS.hy20 ,
    paddingHorizontal: theme.MARGINS.hy20,
    marginBottom: theme.MARGINS.hy40,

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
//bottom shett

bsCont: {flex: 1, alignItems: "center", marginTop: 10},
bsTitleTxt: {
  ...theme.FONTS.Font_l,
  color: theme.COLORS.black,
  marginTop: 30,
},
bsDescTxt: {
  ...theme.FONTS.Font_l,
  color: theme.COLORS.black,
  marginTop: theme.MARGINS.marginXParent_xxs,
},
flexDirection: {
  flexDirection: "row",
 
  // alignItems:'center'
},

});

export default styles;
