import {StyleSheet} from "react-native";
import {theme} from "../../../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.COLORS.whiteOnly,
  },
  contentContainer: {
    // marginHorizontal: theme.MARGINS.hy20,
    paddingTop: theme.SIZES.height * 0.02,
    flex:1
  },
});

export default styles;