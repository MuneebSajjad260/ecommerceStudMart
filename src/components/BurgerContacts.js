import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import {useNavigation} from "@react-navigation/native";

import {theme, names} from "../constants";
import {svg} from "../svg";

import ContactCategory from "./ContactCategory";

const BurgerContacts = ({showModal, setShowModal}) => {
  const navigation = useNavigation();

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      style={{margin: 0}}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View
        style={{
          width: 270,
          height: theme.SIZES.height,
          backgroundColor: theme.COLORS.black,
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 50,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: theme.COLORS.white,
              marginBottom: 14,
            }}
          />
          <Text
            style={{
              ...theme.FONTS.H2,
              color: theme.COLORS.white,
              marginBottom: 10,
            }}
          >
            Contact us
          </Text>
          <ContactCategory
            lineOne="27 Division St, New York,"
            lineTwo="NY 10002, USA"
            icon={<svg.ContactMapPinSvg />}
          />
          <ContactCategory
            lineOne="manerosale@mail.com"
            lineTwo="manerosupport@mail.com"
            icon={<svg.ContactMailSvg />}
          />
          <ContactCategory
            lineOne="+17  123456789"
            lineTwo="+17  987654321"
            icon={<svg.ContactPhoneSvg />}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#B3B9C7",
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 14,
              lineHeight: 14 * 1.7,
              marginBottom: 18,
            }}
          >
            Track your order
          </Text>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 50,
              borderColor: "rgba(219,227,245, 0.2)",
              borderWidth: 1,
              borderRadius: 25,
              paddingLeft: 30,
              paddingRight: 5,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => {
              setShowModal(false);
              navigation.navigate(names.Track, {
                orderNumber: "100345",
              });
            }}
          >
            <Text
              style={{
                color: "#B3B9C7",
                paddingHorizontal: 10,
                position: "absolute",
                top: -11,
                left: 20,
                backgroundColor: theme.COLORS.black,
                textTransform: "uppercase",
                ...theme.FONTS.Mulish_600SemiBold,
                fontSize: 12,
                lineHeight: 12 * 1.7,
              }}
            >
              order number
            </Text>
            <Text style={{color: theme.COLORS.white}}>100345</Text>
            <svg.GoToOrderSvg />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BurgerContacts;
