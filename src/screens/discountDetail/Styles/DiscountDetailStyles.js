import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:theme.COLORS.appBg
  },
  wrapper:{
    marginVertical:theme.MARGINS.hy20,
    marginHorizontal:theme.MARGINS.hy10,
//backgroundColor:'red',
    height:556
  },
  imgCont:
  {
    width: 50,
    height: 50,
    alignSelf:'center'
  },
  bannerCont:{
    height:131,
    width: '100%',
    borderRadius: 4,
    marginTop:theme.MARGINS.hy20
  
  },
  title:{
    ...theme.FONTS.H2,
    color:theme.COLORS.black,
    marginTop:theme.MARGINS.hy10
  },
  desc:{
    ...theme.FONTS.H14,
    color:theme.COLORS.black,
    marginTop:theme.MARGINS.hy5

  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18, // Adjust the font size as needed
    marginRight: 10, // Add margin between text and SVG
  },

  termsTxt:{
    ...theme.FONTS.H5
  },
  policy:{
    ...theme.FONTS.H14,
    marginTop:theme.MARGINS.hy10
  },
  readMore:{
    ...theme.FONTS.H14,
    color:'#6919C7',
    marginTop:theme.MARGINS.hy20
  },
  bsCont:{
    marginVertical:theme.MARGINS.hy20,
    marginHorizontal:theme.MARGINS.hy10,
    justifyContent:'space-between',
    flex:1
  },
  termsCond:{
    ...theme.FONTS.H5,
    color:'#6919C7',
  },
  bsBtn:{
   alignSelf:'flex-end'
  }
});

export default styles;
