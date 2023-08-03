import {View, Text, ScrollView} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useRoute} from "@react-navigation/native";
import {renderStatusBar} from "../utils/functions";

import {components} from "../components";
import {theme} from "../constants";
import {svg} from "../svg";

const Track = () => {
  const route = useRoute();
  const {orderNumber} = route.params || {};

  const renderHeader = () => {
    return <components.Header title="Track Your Order" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingVertical: 26}}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <svg.TrackSvg />
        </View>
        <components.Line containerStyle={{marginBottom: 20}} />
        <Text
          style={{
            ...theme.FONTS.H3,
            color: theme.COLORS.black,
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          Your order:
        </Text>
        <Text
          style={{
            marginBottom: 30,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.COLORS.gray1,
            textAlign: "center",
          }}
        >
          #{orderNumber}
        </Text>
        <View
          style={{
            width: theme.SIZES.width,
            paddingHorizontal: 40,
            marginBottom: 30,
          }}
        >
          <components.TrackCategory
            line={true}
            performed={true}
            status="Order created"
            comment="We have received your order"
          />
          <components.TrackCategory
            line={true}
            performed={true}
            status="Order confirmed"
            comment="Your order has been confirmed"
          />
          <components.TrackCategory
            line={true}
            performed={true}
            status="Order shipping"
            comment="Estimated for Feb 02, 2022"
          />
          <components.TrackCategory
            line={true}
            status="Courier delivering"
            comment="Estimated for Feb 05, 2022"
          />
          <components.TrackCategory
            status="Receiving"
            comment="Estimated for Feb 05, 2022"
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.white}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Track;
