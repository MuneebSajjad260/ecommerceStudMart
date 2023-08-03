import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBar} from "../../utils/functions";

import {components} from "../../components";
import {theme, names} from "../../constants";
import {svg} from "../../svg";

const address = [
  {
    id: "1",
    type: "Home",
    address: "8000 S Kirkland Ave, Chicago...",
    icon: <svg.HomeAddressSvg />,
  },
  {
    id: "2",
    type: "Work",
    address: "8000 S Kirkland Ave, Chicago...",
    icon: <svg.BriefcaseAddressSvg />,
  },
  {
    id: "3",
    type: "Other",
    address: "8000 S Kirkland Ave, Chicago...",
    icon: <svg.MapPinAddressSvg />,
  },
];

const Address = () => {
  const navigation = useNavigation();
  const renderHeader = () => {
    return <components.Header title="My address" goBack={true} />;
  };

  function renderContent() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingVertical: 10}}
      >
        {address.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderBottomColor: theme.COLORS.lightBlue1,
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderColor: theme.COLORS.lightBlue1,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 14,
                }}
              >
                {item.icon}
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    ...theme.FONTS.H5,
                    marginBottom: 4,
                  }}
                >
                  {item.type}
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 14,
                    color: theme.COLORS.gray1,
                  }}
                >
                  {item.address}
                </Text>
              </View>
              {/* <Edit /> */}
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{alignItems: "center", marginTop: 30}}
          onPress={() => navigation.navigate(names.NewAddress)}
        >
          <svg.AddANewAddressSvg />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.white}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Address;
