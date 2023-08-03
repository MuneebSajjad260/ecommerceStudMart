import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";
import React, {useState, useEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Accordion from "react-native-collapsible/Accordion";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import {renderStatusBar} from "../utils/functions";
import {selectUser} from '../store/userSlice';
import {ListOrder} from "../services/actions/ListOrders";
import styles from "./tabs/Style/HistoryStyle";
import Wrapper from "../components/Wrapper";
import {components} from "../components";
import {theme, orderHistory, names} from "../constants";
import {svg} from "../svg";
import MapPinSvg from "../svg/MapPinSvg";
import EmptyOrderHistory from "../svg/EmptyOrderHistorySvg";

const History = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const auth = useSelector(selectUser);
  //STATES
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [orderHistoryData, setOrderHistoryData] = useState([]);
  // const orderHistoryData = [
  //   {
  //     id: 11,
  //     placedOn: "21 April, 2023",
  //     productName: "Wireless charger",
  //     price: "300",
  //     status: "processing",
  //   },
  //   {
  //     id: 11,
  //     placedOn: "09 may, 2023",
  //     productName: "Wireless charger",
  //     price: "300",
  //     status: "dispatched",
  //   },
  //   {
  //     id: 11,
  //     placedOn: "9 june, 2023",
  //     productName: "Wireless charger",
  //     price: "300",
  //     status: "completed"}
  // ];

  //CALLING LIST OF ORDERS API
  useEffect(() => {
    dispatch(ListOrder(auth.data.id))
      .unwrap()
      .then((result) => {
        console.log('result of list order api -', result);
        setOrderHistoryData(result);
      })
      .catch((err) => {
        console.log('error of list of orders-', err);
      });
  }, [dispatch, auth.data.id]);

  //FILTERS DATA
  const filters = [
    {
      id: 1,
      filterName: "All Orders",
    },
    {
      id: 2,
      filterName: "Processing",
      enum: "processing",
    },
    {
      id: 3,
      filterName: "Dispatched",
      enum: "dispatched",
    },
    {
      id: 4,
      filterName: "Completed",
      enum: "completed",
    },
  ];

  //HEADER
  const renderHeader = () => {
    return <components.Header title="My Orders" goBack={true} border={true} />;
  };

  //FILTER LIST

  const renderFilterList = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filters}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.filterCont,
                {
                  backgroundColor:
                    item?.id === selectedFilter ? theme.COLORS.appColor : null,
                },
              ]}
              onPress={() => {
                filterSelection(item);
              }}
            >
              <Text
                style={[
                  styles.status,
                  {
                    color:
                      item?.id === selectedFilter
                        ? theme.COLORS.whiteOnly
                        : theme.COLORS.black,
                  },
                ]}
              >
                {item?.filterName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const filterSelection = (data) => {
    setSelectedFilter(data?.id);
    console.log("DATA--1-", data);
  };

  //ORDER HISTORY CONTENT
  const orderDetailsContent = ({item, index}) => {
    return (
      <View
        style={
          index === 0
            ? styles.contentContainer
            : {marginHorizontal: theme.MARGINS.hy20}
        }
      >
        <TouchableOpacity
          onPress={() => {
            console.log(
              'meta check--',
              item?.meta_data[3].value == 1 ? 'ship' : 'self',
            );
            navigation.navigate(names.OrderSummary, {
              deliveryMethod: item?.meta_data[3].value == 1 ? 'ship' : 'self',
              orderId: item?.id,
            });
          }}
        >
          <Wrapper style={styles.wrapperCont}>
            <View style={styles.flexDirection}>
              <Text style={styles.upper}>{`Order ID: ${item?.id}`}</Text>
              <Text style={styles.upper}>{item?.status}</Text>
            </View>

            <Text style={styles.placedOn}>{`Placed on: ${moment(
              item?.date_created,
            ).format('DD MMMM, YYYY')}`}</Text>
            <View
              style={[
                styles.flexDirection,
                {alignItems: 'center', justifyContent: 'space-between'},
              ]}
            >
              <Text style={styles.price}>{`QAR ${item?.total}`}</Text>

              {item?.status == 'dispatched' ? (
                <TouchableOpacity
                  style={[
                    styles.flexDirection,
                    {alignItems: 'center', marginTop: 15},
                  ]}
                  onPress={() => {
                    console.log('i am track order', item?.id);
                    trackOrder(item?.id);
                    //  `https://portal.falconflex.ai/#/tracking/%7Bshort_id%7D`
                  }}
                >
                  <MapPinSvg />

                  <Text
                    style={[styles.Orderdesc, {marginLeft: theme.MARGINS.hy5}]}
                  >
                    Track order
                  </Text>
                </TouchableOpacity>
              ) : item?.status == 'completed' ? (
                <Text style={[styles.Orderdesc, {marginTop: 15}]}>
                  Give a review
                </Text>
              ) : null}
            </View>
          </Wrapper>
        </TouchableOpacity>
      </View>
    );
  };

  //EMPTY ORDER DETAIL LIST

  const emptyOrderDetailList = () => {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.cartCont}>
          <EmptyOrderHistory />
        </View>
        <Text style={styles.noOrder}>You don’t have any order yet</Text>
        <Text style={styles.descTxt}>
          Begin browsing our collection and shop items to get started.
        </Text>
      </View>
    );
  };

  //ORDER LIST
  const renderOrderList = () => {
    let filteredData = orderHistoryData;

    if (selectedFilter !== 1) {
      // 1 represents "All Orders"
      filteredData = orderHistoryData.filter((item) => {
        switch (selectedFilter) {
          case 2: // "Processing"
            return item.status == "processing";
          case 3: // "Dispatched"
            return item.status == "dispatched";
          case 4: // "Completed"
            return item.status == "completed";
          default:
            return true;
        }
      });
    }

    return (
      // <View style={styles.contentContainer}>
      <FlatList
        data={filteredData}
        showsVerticalScrollIndicator={false}
        renderItem={orderDetailsContent}
        ListEmptyComponent={emptyOrderDetailList}
      />
      // </View>
    );
  };

  const trackOrder = (id) => {
    const url = `https://portal.falconflex.ai/#/tracking/%7B${id}%7D`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Cannot open URL:", url);
        }
      })
      .catch((err) => console.error("An error occurred:", err));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {renderStatusBar()}
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderFilterList()}
        {renderOrderList()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;
