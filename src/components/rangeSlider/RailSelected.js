import React, {memo} from "react";
import {StyleSheet, View} from "react-native";
import {theme} from "../../constants";

const RailSelected = () => {
  return <View style={styles.root} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 2,
    backgroundColor: theme.COLORS.appColor,
    borderRadius: 2,
    flex: 1,
  },
});
