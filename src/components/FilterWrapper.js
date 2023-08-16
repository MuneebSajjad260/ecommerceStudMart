import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { theme } from "../constants";
import Wrapper from "./Wrapper";

const FilterWrapper = ({ category, university, price, renderPrice, applyFilters,priceFilter }) => {
  const [filterData, setFilterData] = useState({ category: [], university: [] }); // Separate arrays for category and university

  useEffect(() => {
    applyFilters(filterData);
  }, [filterData]);

  //setting priceFilter in filterData array
  useEffect(() => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      priceFilter: priceFilter, // Update the count value in filterData
    }));
  }, [priceFilter]);


  const toggleFilterSelection = (item, categoryType) => {
    const updatedCategory = [...filterData[categoryType]];

    if (updatedCategory.some((selectedItem) => selectedItem.id === item.id)) {
      updatedCategory.splice(
        updatedCategory.findIndex((selectedItem) => selectedItem.id === item.id),
        1
      );
    } else {
      updatedCategory.push(item);
    }

    setFilterData({ ...filterData, [categoryType]: updatedCategory });
  };

  const isFilterSelected = (item, categoryType) =>
    filterData[categoryType].some((selectedItem) => selectedItem.id === item.id);

  return (
    <Wrapper style={styles.wrapper}>
      {/* -------CATEGORIES------ */}
      <View>
        <Text style={styles.name}>Categories</Text>

        <View style={styles.nameContainerWrapper}>
          {category?.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleFilterSelection(item, "category")}
              style={[
                styles.nameContainer,
                isFilterSelected(item, "category") && styles.selectedContainer,
              ]}
            >
              <Text
                style={[
                  styles.filterTxt,
                  {
                    color: isFilterSelected(item, "category")
                      ? theme.COLORS.white
                      : theme.COLORS.black,
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* -------UNIVERSITIES------ */}
      <View style={styles.marginTop}>
        <Text style={styles.name}>Universities</Text>

        <View style={styles.nameContainerWrapper}>
          {university?.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleFilterSelection(item, "university")}
              style={[
                styles.nameContainer,
                isFilterSelected(item, "university") && styles.selectedContainer,
              ]}
            >
              <Text
                style={[
                  styles.filterTxt,
                  {
                    color: isFilterSelected(item, "university")
                      ? theme.COLORS.white
                      : theme.COLORS.black,
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* -------PRICE------ */}
      <View style={styles.marginTop}>
        <Text style={styles.name}>Price</Text>

        <View style={styles.nameContainerWrapper}>
          {renderPrice}
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: theme.COLORS.lightBlue1,
  },
  name: {
    ...theme.FONTS.H5,
    color: theme.COLORS.black,
  },
  marginTop: {marginTop: 16},
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    height: "auto",
    width: "auto",
    paddingHorizontal: theme.MARGINS.hy10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(20, 0, 35, 0.1)",
    borderRadius: 20,
    backgroundColor: "rgba(20, 0, 35, 0.05)",
    marginTop: 12, // Add margin to the bottom of each item
    marginRight: 8, // Add margin to the right of each item
  },
  nameContainerWrapper: {
    flexDirection: "row",
    alignItems: "flex-start", // Items will start from the top of the container
    flexWrap: "wrap", // Items will wrap to the next line if they exceed container width
    marginTop: theme.MARGINS.vt10, // Add some spacing between the sections
  },
  selectedContainer: {
    backgroundColor: theme.COLORS.appColor, // Set the selected background color
  },
  filterTxt: {
    ...theme.FONTS.H12,
    color: theme.COLORS.black,
  },
});

export default FilterWrapper;
