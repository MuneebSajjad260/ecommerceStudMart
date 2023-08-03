import React, {useState} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import {renderStatusBar} from "../../utils/functions";

import {theme, names} from "../../constants";
import {components} from "../../components";

const NewAddress = () => {
  const navigation = useNavigation();

  const [rememberMe, setRememberMe] = useState(false);

  const renderHeader = () => {
    return <components.Header title="Add a new address" goBack={true} />;
  };

  const renderMap = () => {
    return (
      <View
        style={{
          width: "100%",
          height: theme.SIZES.height * 0.45,
          borderBottomWidth: 1,
          borderBottomColor: theme.COLORS.lightBlue1,
          marginBottom: 29,
          marginTop: 10,
        }}
      >
        <components.SingleImageItem
          source={{
            uri: "https://dl.dropbox.com/s/ks1gg2vqo9phs4u/01.jpg?dl=0",
          }}
          containerStyle={{
            width: "100%",
            height: "100%",
            borderBottomWidth: 1,
            borderBottomColor: theme.COLORS.lightBlue2,
          }}
        />
      </View>
    );
  };

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <components.InputField
          title="title"
          placeholder="Mom"
          containerStyle={{
            marginBottom: 16,
          }}
        />
        <components.InputField
          title="enter a new address"
          placeholder="3646 S 58th Ave, Cicero, IL 60804, U..."
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: theme.COLORS.lightBlue1,
              marginRight: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {rememberMe === true && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: theme.COLORS.lightBlue1,
                  borderRadius: 2,
                }}
              />
            )}
          </View>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.7,
              color: theme.COLORS.gray1,
            }}
          >
            Use current location
          </Text>
        </TouchableOpacity>
        <components.Button
          title="save address"
          containerStyle={{marginBottom: 30}}
          onPress={() => navigation.navigate(names.Address)}
        />
      </KeyboardAwareScrollView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.white}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderMap()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default NewAddress;
