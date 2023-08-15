import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {theme} from "../constants";
import Wrapper from "./Wrapper";

const FilterWrapper = ({category, university, price, renderPrice}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);

  //CATEGORIES.//////
  const toggleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const isItemSelected = (itemId) => selectedItems.includes(itemId);

  //UNIVERSITIES/////
  const toggleUniversitySelection = (universityId) => {
    if (selectedUniversities.includes(universityId)) {
      setSelectedUniversities(
        selectedUniversities.filter((id) => id !== universityId),
      );
    } else {
      setSelectedUniversities([...selectedUniversities, universityId]);
    }
  };

  const isUniversitySelected = (universityId) =>
    selectedUniversities.includes(universityId);

  return (
    <Wrapper style={styles.wrapper}>
      {/* -------CATEGORIES------ */}
      <View>
        <Text style={styles.name}>Categories</Text>

        <View style={styles.nameContainerWrapper}>
          {category?.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleItemSelection(item.id)}
              style={[
                styles.nameContainer,
                isItemSelected(item.id) && styles.selectedContainer,
              ]}
            >
              <Text
                style={[
                  styles.filterTxt,
                  {
                    color: isItemSelected(item.id)
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
              onPress={() => toggleUniversitySelection(item.id)}
              style={[
                styles.nameContainer,
                isUniversitySelected(item.id) && styles.selectedContainer,
              ]}
            >
              <Text
                style={[
                  styles.filterTxt,
                  {
                    color: isUniversitySelected(item.id)
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
          {/* {price?.map((item) => (
            <View style={styles.nameContainer} key={item.id}>
              <Text>{item.name}</Text>
            </View>
          ))} */}
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
