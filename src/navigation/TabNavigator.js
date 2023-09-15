import {View, TouchableOpacity, useColorScheme} from "react-native";
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {setScreen} from "../store/tabSlice";
import {useSelector, useDispatch} from "react-redux";

import {theme, tabNames} from "../constants";
import {svg} from "../svg";
import {screens} from "../screens";
import getThemedColors from '../utils/themeMode';
import CategoryTabSvg from '../svg/CategoryTabSvg';

const TabNavigator = (props) => {
  console.log('---props1---', props);

  const dispatch = useDispatch();
  const currentScreen = useSelector((state) => state.tab.screen);
  const colors = getThemedColors(useColorScheme());

  const tabNavigation = [
    tabNames.Home,
    tabNames.Category,
    tabNames.Order,
    tabNames.Profile,
  ];

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      {currentScreen === tabNames.Home && <screens.HomeOne {...props} />}
      {/* {currentScreen === tabNames.Search && <screens.Search {...props} />} */}
      {currentScreen === tabNames.Category && <screens.Category {...props} />}
      {currentScreen === tabNames.Order && <screens.Order />}
      {currentScreen === tabNames.Profile && <screens.Profile />}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 25,
          borderTopWidth: 1,
          borderTopColor: colors.lightBlue1,
        }}
      >
        {tabNavigation.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log('----setScreen 9009----', item);
                dispatch(setScreen(item));
              }}
            >
              {item === tabNames.Home && (
                <svg.HomeTabSvg currentScreen={currentScreen} />
              )}

              {item === tabNames.Category && (
                <CategoryTabSvg currentScreen={currentScreen} />
              )}

              {item === tabNames.Order && (
                <svg.BagTabSvg currentScreen={currentScreen} />
              )}

              {item === tabNames.Profile && (
                <svg.ProfileTabSvg currentScreen={currentScreen} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabNavigator;
