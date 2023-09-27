import {StyleSheet} from "react-native";
import {theme} from "../../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.appBg,
  },
  contentContainer: {
    
    marginHorizontal: theme.MARGINS.hy10,
    marginTop: 345,
    marginBottom:theme.MARGINS.hy20
   
  },
  filterAndSort:
  {
  
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  flexDirection:
  {flexDirection: 'row', alignItems: 'center'},
  prodList:
  {
    //flex: 1,
    marginHorizontal: 6,
    marginTop: 8,

  },

});

export default styles;
