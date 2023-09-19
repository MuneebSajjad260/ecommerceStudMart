import React, {useState, Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {renderStatusBar} from '../../utils/functions';
import {components} from '../../components';
import styles from './Styles/TotalDiscountScreenStyle';
import {ProductListItem} from '../../utils/functions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {names} from '../../constants';
import {theme} from '../../constants';
import Wrapper from '../../components/Wrapper';
import DiscountNoCard from '../../components/DiscountNoCard';

const TotalDiscountCodeScreen = ({route}) => {
    const navigation = useNavigation();
  const {discountData} = route.params || {};
  const {discount} = route.params || false;

  console.log("discountData--", discountData);;
  const renderHeader = () => {
    return (
      <components.Header
        border={false}
        goBack={true}
        searchIcon={false}

           discount={discount}
containerStyle={{
          backgroundColor: theme.COLORS.white,
          height: theme.RES_HEIGHT(90, 220, 125),

            }}
        level={theme.RES_HEIGHT(8, 100, 35)}

          discountData={discountData}
      />
    );
  };

  const renderContent = () => {
    return  (
      <View style={styles.contentCont}>
        <FlatList
          numColumns={2}
          data={discountData?.brand_discount}
         renderItem={({item}) => {
            return  (
              <DiscountNoCard 
                data={item}
                col={true}
                onPress={() =>
                  navigation.navigate(names.discountDetail, {
                    detail:item,
                    discountData:discountData
                  })
                }
              />
            );
          }}
          columnWrapperStyle={styles.wrapperStyle}

            />
      </View>
    );;
  };;

  return  (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </View>
  );;
};

export default TotalDiscountCodeScreen;
