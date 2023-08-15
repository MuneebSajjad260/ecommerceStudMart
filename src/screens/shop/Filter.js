import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useNavigation, useRoute} from '@react-navigation/native';
import useFetch from '../../utils/useFetch';
import {renderStatusBar} from '../../utils/functions';

import {components} from '../../components';
import {theme, names} from '../../constants';
import styles from './Styles/FilterStyle';
import FilterWrapper from '../../components/FilterWrapper';

const Filter = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {title} = route.params || {};

  const categories = [
    {id: 1, name: "Fashion"},
    {id: 2, name: "Accessories"},
    {id: 3, name: "Pets"},
    {id: 4, name: "Electronics"},
    {id: 5, name: "Sports"},
  ];
  const universities = [
    {id: 1, name: "Lusail University"},
    {id: 2, name: "Qatar University"},
    {id: 3, name: " Northwestern University"},
  ];

  const price = [
    {id: 1, name: "QAR 0.00 - QAR 359.00"},
    {id: 2, name: "QAR 359.00 - QAR 450.00"},
    {id: 3, name: "QAR 359.00 - QAR 450.00"},
  ];

  const [productSize, setProductSize] = useState(1);
  const [productColor, setProductColor] = useState(1);
  const [productTag, setProductTag] = useState(1);

  const renderHeader = () => {
    return (
      <components.Header
        title="Filter"
        goBack={true}
        border={true}
        containerStyle={{
          backgroundColor: theme.COLORS.white,
          height: theme.RES_HEIGHT(90, 100, 125),
        }}
        level={theme.RES_HEIGHT(8, 12, 35)}
      />
    );
  };

  const renderPrice = () => {
    return (
      <View style={styles.sliderCont}>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => {
            return (
              <View style={styles.alignItem}>
                <View style={styles.leftMark} />
                <Text style={styles.leftTxt}>QAR {e.currentValue}</Text>
              </View>
            );
          }}
          customMarkerRight={(e) => {
            return (
              <View style={styles.alignItem}>
                <View style={styles.rightMark} />
                <Text style={styles.rightTxt}>QAR {e.currentValue}</Text>
              </View>
            );
          }}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.SIZES.width / 1.25}
          onValuesChange={(e) => {}}
          selectedStyle={{
            backgroundColor: theme.COLORS.black,
            width: 300,
          }}
          unselectedStyle={{
            backgroundColor: '#DBE3F5',
            width: 300,
          }}
          containerStyle={
            {
              // height: 20,
              // width: '100%',
            }
          }
          trackStyle={{
            height: 3,
            width: '100%',
          }}
        />
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <FilterWrapper
        category={categories}
        university={universities}
        price={price}
        renderPrice={renderPrice()}
      />
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title="apply filters"
        onPress={() =>
          navigation.navigate(names.Shop, {products: data, title: title})
        }
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        {/* {renderPrice()} */}
        <View style={styles.contentContainer}>
          {renderCategories()}

          {renderButton()}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default Filter;
