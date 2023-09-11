import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:theme.COLORS.appBg
  },
  contentContainer: {
marginHorizontal: theme.MARGINS.hy10,
    marginTop: 425,
    marginBottom: theme.MARGINS.hy20,
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    //zIndex: 1,
  },

  wrapperStyle: {justifyContent: 'space-between'},
  imageContainer: {
    // width: 53,
    // height: 51,
    // padding: 12,
    // borderRadius: 0,

    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uniName: {...theme.FONTS.H5, color: theme.COLORS.black},
  sellerNo: {
    ...theme.FONTS.Mulish_600SemiBold,
    fontSize: theme.FONTS.dF_sm,
    color: theme.COLORS.black,
    marginTop: 10,
  },
  sellerTxt: {...theme.FONTS.H14, color: theme.COLORS.secondryTextColor},

  uniImage: {
    width: '100%',
    height: 150,
    marginBottom: 6,
    backgroundColor: theme.COLORS.lightBlue2,
    borderRadius: 8,
  },
  uniCont: {
    flex: 1,
    width: theme.SIZES.width,
    margin: 6,
    borderWidth: 1,
    borderColor: 'rgba(20, 0, 35, 0.1)',
    padding: 8,
    borderRadius: 15,
  },
  uniLength: {
    ...theme.FONTS.H14,
    color: theme.COLORS.secondryTextColor,
    marginBottom: theme.MARGINS.hy10,
    marginLeft: 6,
  },
  firstImg: {
    position: "absolute",
    width: "100%",
    height: 300,
    marginTop: 80,
   // paddingHorizontal: theme.MARGINS.hy20,
    // zIndex:100 // Adjust the height as needed
  },
  img2Cont: {flex: 1, justifyContent: "flex-end", alignItems: 'center'},
  brandImg: {
    width: '100%', // Occupy the entire width of the container
    height: 200, // Set a fixed height for the nested ImageBackground
    // marginTop:100,
    // zIndex:100 // Adjust the height as needed
  },
  brandContent: {flex: 1, marginTop: 60, marginLeft: theme.MARGINS.hy20},
  brandContentAllign: {flexDirection: "row", alignItems: "center"},
  marginLeft: {marginLeft: 15},
  imgHeading: {...theme.FONTS.H12, color: theme.COLORS.whiteOnly},
  number: {...theme.FONTS.H2L, color: theme.COLORS.whiteOnly},
  subHeadCont:{
     flex:1,alignItems:'center',
     marginTop:theme.MARGINS.hy40,
   
  },
  subHeadTxt:
  {  textAlign:'center',
     ...theme.FONTS.H2L,color:theme.COLORS.black},

     brandAndDiscConts:
     {justifyContent:'space-around', 
     flexDirection:'row' ,
     flex:0.7},

brandCont:
{backgroundColor:theme.COLORS.whiteOnly,
    marginTop:theme.MARGINS.hy20,
    height:50,
    width:136,
    borderWidth:1,
    borderRadius:100,
    borderColor:theme.COLORS.border ,
    flexDirection:'row',
    alignItems:'center',
    padding:theme.MARGINS.hy5,

    
   transform: [{rotate: '715deg'}]
},
discCont:
{
    backgroundColor:theme.COLORS.whiteOnly,
    height:50,
    width:155,borderWidth:1,
     borderRadius:100,
     borderColor:theme.COLORS.border ,
     flexDirection:'row',
     alignItems:'center',
     padding:theme.MARGINS.hy5,

     transform: [{rotate: '7deg'}],

},
innerTxt:{
    marginLeft:theme.MARGINS.hy5,
    ...theme.FONTS.H14
}
});

export default styles;
