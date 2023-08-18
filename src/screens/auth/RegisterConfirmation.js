import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { renderHeaderAuth, renderStatusBarLight } from "../../utils/functions";

import { components } from "../../components";
import { theme, names } from "../../constants";
import makeStyles from "./Styles/RegisterConfirmStyle"

const RegisterConfirmation = ({ route, apColors }) => {
  const params = route.params
  let EMAIL = params?.email
  const navigation = useNavigation();
  const styles = makeStyles(apColors)

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <components.SecondaryButton
          title="Browse products"
          containerStyle={styles.browse}
          onPress={() => navigation.navigate(names.TabNavigator)}
        />
        <View
          style={styles.contentFooter}
        >
          <Text
            style={styles.haveAccount}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(names.Login)}>
            <Text
              style={styles.signinText}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const renderContent = () => {
    return (
      <View
        style={styles.emailSentView}
      >
        <Text
          style={styles.emailSentText}
        >
          A verification email has been sent to your <Text style={styles.bold}>{EMAIL}</Text> account. Please verify your email to continue.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderStatusBarLight()}
      {renderHeaderAuth('One step away!', 'Verifying your email address', "mail")}
      {renderContent()}
      {renderFooter()}
    </View>
  );
};

export default RegisterConfirmation;
