import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
   
 
  },
  scrollCont: 
  {
        paddingTop: theme.MARGINS.hy20,
        paddingBottom: theme.MARGINS.hy40,
        paddingHorizontal:theme.MARGINS.hy10,
        justifyContent:"space-between",
        flex:1

},
rating:{
    ...theme.FONTS.H48,
    color:theme.COLORS.black,
   alignSelf:'center'
},
avgRating:{
  ...theme.FONTS.H12,
  color:theme.COLORS.secondryTextColor,
 alignSelf:'center',
 marginTop:theme.MARGINS.hy5,

},
starCont:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    
},
container: {
  //  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starRating: {
    flexDirection: 'row',
  },

  wrapper: {
    borderColor: theme.COLORS.lightBlue1,
    marginBottom:theme.MARGINS.hy20,
  //  marginHorizontal:theme.MARGINS.hy10,
    padding:theme.MARGINS.hy20
  },
  name: {
    ...theme.FONTS.Font_l,
    color: theme.COLORS.black,
    marginBottom:theme.MARGINS.hy30
    
  
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  allignRow:{
      flexDirection: "row",
      alignItems: "center",
  },
  imgCont: {
    width: 42,
    height: 42,

    borderRadius: 20,
    backgroundColor: theme.COLORS.whiteOnly,
    alignItems: "center",
    justifyContent: "center",
  },

  addImgCont: {
      height: 80,
      width: "100%",
      borderWidth: 1,
     marginTop:theme.MARGINS.hy20,
     padding:theme.MARGINS.hy20,
      borderRadius: 16,
     // justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      borderColor: theme.COLORS.border,
      borderStyle: 'dashed'
  },
  price: {
    ...theme.FONTS.H12,
    color: theme.COLORS.secondryTextColor,
  },
  circularImageContainer: {
      width: 40, // Adjust the width and height as needed
      height: 40,
      borderRadius: 50, // Half of the width and height to make it circular
      overflow: 'hidden',
    },
    circularImage: {
      width: '100%',
      height: '100%',
    },
    rating:{
      ...theme.FONTS.H12,
    color: theme.COLORS.black,
    marginLeft:theme.MARGINS.hy5
    },
    desc:{
      ...theme.FONTS.H14,
      color:theme.COLORS.black,
      marginTop:theme.MARGINS.hy20
    },
    starRating: {
      flexDirection: 'row',
 alignSelf:'center'
    },
    addImg:{
      ...theme.FONTS.H12,
      color: theme.COLORS.black,
      marginLeft:theme.MARGINS.hy10,
  
    },
    imgCont:
    {justifyContent:'flex-start',alignItems:'center',backgroundColor:theme.COLORS.lightBlue2,width:60,height:50,borderRadius:12},
    receiptImg:
    {
      width:30,
      height:30,
      alignSelf:'center',
      marginTop:theme.MARGINS.hy10
    },
    removeContainer:{
   position:'absolute',
   width:20,
   height:20,
   alignItems:'center',
   justifyContent:'center',
backgroundColor:theme.COLORS.black,
borderRadius:20,

   right:-10,
   top:-10
    },
    removeTxt:{
  ...theme.FONTS.H12,
      color:theme.COLORS.white,
      lineHeight:theme.MARGINS.hy10,
    },

});

export default styles;
