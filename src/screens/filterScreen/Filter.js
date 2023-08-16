import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {useNavigation, useRoute} from "@react-navigation/native";
import useFetch from "../../utils/useFetch";
import {renderStatusBar} from "../../utils/functions";
import {useSelector, useDispatch} from "react-redux";
import {components} from "../../components";
import {theme, names} from "../../constants";
import styles from "./Styles/FilterStyle";
import Slider from 'rn-range-slider';
import Notch from "../../components/rangeSlider/Notch";
import Rail from '../../components/rangeSlider/Rail';
import RailSelected from '../../components/rangeSlider/RailSelected';
import Label from '../../components/rangeSlider/Label';
import Thumb from '../../components/rangeSlider/Thumb';
import FilterWrapper from "../../components/FilterWrapper";
import {getCategoriesListAction} from "../../services/actions/ProductAction";
import {
  GetUniversities,
  selectUniversityData,
} from "../../services/actions/GetUniversities";

const Filter = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const {title} = route.params || {};
  const [category, setCategory] = useState();
  const [universityList, setUniversityList] = useState();
  const [loading, setLoading] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(1000);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [filter, setFilter] = useState();
  const [priceFilter, setPriceFilter] = useState([]);

  //GET CATEGORIES FROM API
  useEffect(() => {
    setLoading(true);
    dispatch(getCategoriesListAction())
      .unwrap()
      .then((result) => {
        console.log("result of category -", result);
        setCategory(result);
      })
      .catch((err) => {
        console.log("err category--", err);
        // Handle the error by displaying it using <Text> component
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //GET UNIVERSITIES FROM API

  useEffect(() => {
    setLoading(true);
    dispatch(GetUniversities())
      .unwrap()
      .then((result) => {
        console.log("result of university -", result);
        setUniversityList(result);
      })
      .catch((err) => {
        console.log("err university--", err);
        // Handle the error by displaying it using <Text> component
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    handlePrice();
  }, [low, high]);

  // const categories = [
  //   {id: 1, name: "Fashion"},
  //   {id: 2, name: "Accessories"},
  //   {id: 3, name: "Pets"},
  //   {id: 4, name: "Electronics"},
  //   {id: 5, name: "Sports"},
  // ];
  // const universities = [
  //   {id: 1, name: "Lusail University"},
  //   {id: 2, name: "Qatar University"},
  //   {id: 3, name: " Northwestern University"},
  // ];

  const price = [
    {id: 1, name: 'QAR 0.00 - QAR 359.00'},
    {id: 2, name: 'QAR 359.00 - QAR 450.00'},
    {id: 3, name: 'QAR 359.00 - QAR 450.00'},
  ];

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

  const renderThumb = useCallback((name) => <Thumb name={name} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  //HANDLING PRICES
  handlePriceFilter = (priceRange, low, high) => {
    if (low > 0 || high < 1000) {
      setPriceFilter([{filterName: priceRange, low: low, high: high}]);
    }
    // console.log("price range", priceFilter)
  };

  handlePrice = () => {
    let a;
    range = `SAR ${low}-${high}`;
    console.log('a231', a);
    handlePriceFilter(range, low, high);
  };

  //APPLY FILTERS
  const applyFilters = (selectedFilters) => {
    console.log("parent dilterdata---", selectedFilters);
    // const updatedFilterData = {...selectedFilters, priceFilter};
    // console.log("parent dilterdata--- 2-", updatedFilterData);
    setFilter(selectedFilters);
  };

  const renderPrice = () => {
    return (
      <View style={styles.sliderCont}>
        {/* <MultiSlider
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
            backgroundColor: "#DBE3F5",
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
            width: "100%",
          }}
        /> */}

        <View style={styles.priceSliderContainer}>
          <Slider
            style={styles.slider}
            min={min}
            max={max}
            step={1}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            //renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
          <View style={styles.horizontalContainer}>
            <Text style={styles.valueText}>QAR {low}</Text>
            <Text style={styles.valueText}>QAR {high}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <FilterWrapper
        category={category}
        university={universityList}
        price={price}
        renderPrice={renderPrice()}
        applyFilters={applyFilters} // Pass the function here
        priceFilter={priceFilter}
      />
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title="apply filters"
        onPress={() => {
          navigation.navigate(names.ShopFilter, {
            // products: data,
            // title: title
            filter: filter,
          });
        }}
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
