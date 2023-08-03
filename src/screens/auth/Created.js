import {View, Text, ScrollView} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBar} from "../../utils/functions";

import {components} from "../../components";
import {theme, names} from "../../constants";
import {svg} from "../../svg";

const Created = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return <components.Header logo={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingVertical: 40}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{alignSelf: "center", marginBottom: 20}}>
          <svg.AccountUserSvg />
        </View>
        <components.Line containerStyle={{marginBottom: 14}} />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H2,
            color: theme.COLORS.black,
            marginBottom: 14,
          }}
        >
          Account Created!
        </Text>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.gray1,
            lineHeight: 16 * 1.7,
            marginBottom: 30,
          }}
        >
          Qui ex aute ipsum duis. Incididunt{"\n"}adipisicing voluptate laborum
        </Text>
        <components.Button
          title="done"
          onPress={() => navigation.navigate(names.TabNavigator)}
          containerStyle={{paddingHorizontal: 20}}
        />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{...theme.SAFE_AREA}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Created;
