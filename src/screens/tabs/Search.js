import { View, Text, ScrollView, TouchableOpacity, FlatList, TextInput, Button,Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../utils/useFetch";
import { renderStatusBar } from "../../utils/functions";
import _debounce from 'lodash/debounce'; // Import the debounce function from lodash
import { throttle } from 'lodash';
import { svg } from '../../svg'


import { components } from "../../components";
import { theme, clothingСategory, searchCategories, names } from "../../constants";
import { Base_Url, Payload_Keys, endPoints } from "../../constants/constants";
import useAxios from "../../utils/useAxios";
import wooAPI from "../../utils/axiosService";
import makeStyles from "./Style/SearchStyle";

const Search = (props) => {
  console.log("---props Search---")
  console.log("---props---", props)
  const navigation = useNavigation();
  const { apColors } = props;
  const styles = makeStyles(apColors)

  const [selectedCategory, setSelectedCategory] = useState("1");

  // const url = "https://api.jsonbin.io/v3/b/638f8648c5b3a64f1bc56490";
  // const {data, isPending, error} = useFetch(url);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [debouncedFilteredList, setDebouncedFilteredList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // const {data, isPending, error} = useAxios('get',Payload_Keys ,Base_Url+endPoints.ProductsList+`?search=${searchTerm}`);
  // useEffect(() => {
  //   const debouncedFilter = _debounce((searchTerm) => {
  //     const filteredData = filterData(searchTerm);
  //     setDebouncedFilteredList(filteredData);
  //   }, 300); // Set the debounce delay to 300ms
  //   debouncedFilter(searchTerm);
  // }, [searchTerm]);

  useEffect(() => {
    const debouncedFilter = _debounce(async (searchTerm, page) => {
      try {
        const filteredData = await filterData1(searchTerm, 10, page); // Change 10 to the desired number of items per page
        // console.log("---filteredData---",filteredData)
        if (filteredData.length > 0)
          var filteredDataArray = filteredData?.filter((item) => item?.name.toLowerCase().includes(searchTerm?.toLowerCase()))
        // console.log("---filteredDataArray---",filteredDataArray)
        if (page === 1 || filteredDataArray.length < 10) {
          setDebouncedFilteredList(filteredDataArray);
        } else {
          setDebouncedFilteredList((prevList) => [...prevList, ...filteredData]);
        }
      } catch (error) {
        console.error('Error filtering products:', error);
        setDebouncedFilteredList([]);
      }
    }, 300); // Set the debounce delay to 300ms

    if (searchTerm?.length > 2)
      debouncedFilter(searchTerm, currentPage);
  }, [searchTerm, currentPage]);


  const handleChange = (text) => {
    // debouncedHandleChange(text);
    setSearchTerm(text);
    // setCurrentPage(1);
    console.log(text)
  };

  const handleClear = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const renderHeaderSearch = () => {
    return (
      <View style={styles.container}>


        <Pressable style={styles.inputStyle} onPress={() => inputRef.focus()}>
          <svg.SearchIconSvg stroke={apColors.inputBorder} />
          <View style={styles.spaceX} />
          <TextInput
           ref={(ref) => (inputRef = ref)}
            placeholder="Search..."
            style={styles.input}
            placeholderTextColor={apColors.inputBorder}
            onChangeText={handleChange}
            value={searchTerm}
          />
        </Pressable>
        
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
          style={styles.crossBtn}>
          <svg.CrossSvg stroke={apColors.inputBorder} fill={apColors.inputBorder} />
        </TouchableOpacity>
      </View>
    );
  };

  const filterData1 = async (searchTerm, perPage = 10, page = 1) => {
    try {
      const response = await wooAPI.get(endPoints.ProductsList, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          // consumer_key: Payload_Keys.consumer_key,
          // consumer_secret:Payload_Keys.consumer_secret,
          search: searchTerm,
          per_page: perPage,
          page: page,
        },
      })
      console.log("----Fetch product data from api-----", searchTerm)
      console.log("----Fetch product data from api-----", searchTerm, "==> ", page)
      console.log("----Fetch product data from api-----", response.data)

      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const renderCategory = () => {
    return (
      <View style={{ marginTop: 25 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginBottom: 20,
          }}
        >
          {searchCategories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderColor: theme.COLORS.lightBlue1,
                  borderWidth: 1,
                  borderRadius: 50,
                  marginRight: 14,
                  backgroundColor:
                    selectedCategory === item.id
                      ? theme.COLORS.lightBlue1
                      : theme.COLORS.transparent,
                }}
                onPress={() => setSelectedCategory(item.id)}
              >
                <Text
                  style={{
                    lineHeight: 12 * 1.7,
                    fontSize: 12,
                    ...theme.FONTS.Mulish_600SemiBold,
                    textTransform: "uppercase",
                    color: theme.COLORS.black,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderClothingСategory = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {clothingСategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: index === 2 ? "100%" : "50%",
                height: 200,
                borderColor: theme.COLORS.white,
                borderRightWidth: 1,
                borderBottomWidth: 1,
              }}
              onPress={() =>
                navigation.navigate("Shop", {
                  title: item.title,
                  products: data,
                })
              }
            >
              <components.ImageItem
                simpleImage
                item={item}
                containerStyle={{ width: "100%", height: "100%" }}
              />
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "rgba(23,28,49, 0.4)",
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                }}
              >
                <Text
                  style={{
                    ...theme.FONTS.H3,
                    color: theme.COLORS.white,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* {renderCategory()} */}
        {/* {renderClothingСategory()} */}
      </ScrollView>
    );
  };


  // Throttle the fetchData function to prevent excessive API calls
  const throttledFetchData = throttle(filterData1, 2000); // 2000 milliseconds (2 seconds) throttling

  const handleLoadMore = () => {
    if (debouncedFilteredList.length > 9) {

      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(1);

    }
  };

  const renderContentSearch = () => {
    return (
      <View>
        {searchTerm.length > 2 && debouncedFilteredList?.length > 0 &&
          <>
            <View style={styles.totalSearches}>

              <Text style={styles.totalItems}>{debouncedFilteredList?.length}</Text>

              {debouncedFilteredList?.length > 1 &&
                <Text style={styles.labelColor}>Search Items</Text>
              }
              {debouncedFilteredList?.length == 1 &&
                <Text style={styles.labelColor}>Search Item</Text>}

            </View>
            <FlatList
              data={debouncedFilteredList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(names.Product, {
                      product: item,
                    })
                  }}
                  style={[styles.listItem]}>
                  <Text style={styles.itemTxt}>{item.name}</Text>
                </TouchableOpacity>
              )}
              // onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
            />
            {/* Load More Button */}
            {/* <Button title="Load More" onPress={handleLoadMore} /> */}
          </>
        }

        {/* ------Recent Searches------- */}
        {/* {debouncedFilteredList?.length == 0 && searchTerm.length == 0 &&
          <View style={styles.recentSearches}>
            {recentSearches?.map((search) => (
              <Text key={search}>{search}</Text>
            ))}
          </View>
        } */}

      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      {renderHeaderSearch()}
      {/* {renderContent()} */}
      {renderContentSearch()}
    </View>
  );
};

const List = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
  },
];

const recentSearches = ["John Doe", "Jane Doe", "John Smith"];


export default Search;
