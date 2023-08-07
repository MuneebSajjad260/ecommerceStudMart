import { StyleSheet } from "react-native";
import { theme } from "../../../constants";


export default styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
  },
    container: {
      flex:0.1,
      flexDirection:"row",
      height: 100,
      paddingTop: 50,
      paddingHorizontal:20,
      alignItems:"center",
      backgroundColor: theme.COLORS.white,
      borderBottomWidth: 0.6,
      borderBottomColor: 'rgba(0, 0, 0, 0.08)',
      elevation:5
    },
    input: {
      flex:1,
      height: 50,
      borderColor: theme.COLORS.inputBorder,
      borderRadius: 100,
      paddingVertical: 10,
      paddingHorizontal: 18,
      fontSize: 14,
      lineHeight: 14 * 1.2,
      borderWidth:1,
      color: theme.COLORS.black,
      flexDirection:"row",
      alignItems:"center"
    },
    crossBtn: { 
      borderWidth:1, 
      borderRadius: 100, 
      padding:16, 
      marginLeft:8,
      borderColor: theme.COLORS.inputBorder
    },
    listItem: {
        padding: 10,
        // borderBottomColor: 'rgba(20, 0, 35, 0.06)',
        borderBottomColor: theme.COLORS.inputBorder,
        borderBottomWidth: 1,
        marginHorizontal: theme.MARGINS.hy20
      },
      recentSearches: {
        marginTop: 10,
      },
      spaceX:{
        width:10,
        height: 5
      },
      totalItems: {
        color: theme.COLORS.inputLabel, 
        marginRight:5, 
        marginLeft:theme.MARGINS.hy20
      },
      labelColor:{
        color: theme.COLORS.inputLabel
      },
      totalSearches:{
        flexDirection:"row",
        marginTop: 12
      
      }

  });
  