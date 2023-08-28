import { StyleSheet } from "react-native";
import { theme } from "../../../constants";


const makeStyles = (apColors) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: apColors.appBg,
  },
  container: {
    // flex: 0.1,
    flexDirection: "row",
    height: 160,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: apColors.secondBg,
    borderBottomWidth: 0.6,
    borderBottomColor: 'rgba(0, 0, 0, 0.08)',
    elevation: 5
  },
  inputStyle: {
    flex: 1,
    height: 60,
    borderColor: apColors.inputBorder,
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderWidth: 1,
    color: apColors.black,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    color: apColors.black,
    fontSize: 14,
    lineHeight: 14 * 1.2,

  },
  crossBtn: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 19,
    marginLeft: 8,
    borderColor: apColors.inputBorder
  },
  listItem: {
    padding: 10,
    // borderBottomColor: 'rgba(20, 0, 35, 0.06)',
    borderBottomColor: apColors.inputBorder,
    borderBottomWidth: 1,
    marginHorizontal: theme.MARGINS.hy20
  },
  itemTxt: {
    color: apColors.black

  },
  recentSearches: {
    marginTop: 10,
  },
  spaceX: {
    width: 10,
    height: 5
  },
  totalItems: {
    color: apColors.inputLabel,
    marginRight: 5,
    marginLeft: theme.MARGINS.hy20
  },
  labelColor: {
    color: apColors.inputLabel
  },
  totalSearches: {
    flexDirection: "row",
    marginTop: 12

  }

});

export default makeStyles