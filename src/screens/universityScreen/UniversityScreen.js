import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {renderStatusBar} from '../../utils/functions';
import {components} from '../../components';
import styles from './Styles/UniversityScreenStyle';
import {ProductListItem} from '../../utils/functions';
import {useNavigation, useRoute} from '@react-navigation/native';
import {names} from '../../constants';
import {theme} from '../../constants';

const UniversityScreen = ({route}) => {
  const navigation = useNavigation();

  const {university} = route.params || {};
  console.log('prod--', university);
  const renderHeader = () => {
    return (
      <components.Header title="Universities" goBack={true} border={true} />
    );
  };

  const ProductListItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.uniCont}
        // onPress={() => navigation.navigate(names.Product, {product: item})}
      >
        <View>
          <components.ImageItem
            item={item}
            containerStyle={styles.uniImage}
            resizeMode="cover"
            borderRadius={8}
            indicatorBorderRadius={18}
          >
            {item.is_sale === true && <components.Sale />}
          </components.ImageItem>

          <Text style={styles.uniName}>{item.name}</Text>
          <Text style={styles.sellerNo}>
            23+ <Text style={styles.sellerTxt}>seller</Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderProductsList = () => {
    return (
      <View style={styles.contentContainer}>
        <Text
          style={styles.uniLength}
        >{`${university.length} universities`}</Text>
        <FlatList
          data={university}
          contentContainerStyle={{flexGrow: 1}}
          numColumns={2}
          columnWrapperStyle={styles.wrapperStyle}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => ProductListItem(item)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      {renderProductsList()}
    </SafeAreaView>
  );
};

export default UniversityScreen;
