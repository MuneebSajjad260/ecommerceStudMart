import React from "react";
import {Text, ScrollView, View, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

import {components} from "../../components";
import {theme, names} from "../../constants";
import {svg} from "../../svg";
import { useDispatch, useSelector } from "react-redux";
import { PlaceOrderAction } from "../../services/actions/OrderAction";
const creditCards = [
  {
    id: "1",
    image: "https://dl.dropbox.com/s/8e2zgvf1qjo77tr/01.png?dl=0",
  },
  {
    id: "2",
    image: "https://dl.dropbox.com/s/uplx035pg4crmkx/02.png?dl=0",
  },
  {
    id: "3",
    image: "https://dl.dropbox.com/s/hy3jf5splox6af6/03.png?dl=0",
  },
];

const Method = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total);


  const renderHeader = () => {
    return <components.Header title="Payment Method" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.H5,
              textTransform: "capitalize",
              color: theme.COLORS.black,
            }}
          >
            Cards
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(names.NewCard)}>
            <svg.AddANewCardSvg />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
        >
          {creditCards.map((item, index) => {
            return (
              <View key={index} style={{marginRight: 14}}>
                <components.ImageItem
                   simpleImage
                  item={item}
                  containerStyle={{width: 279, height: 170}}
                />
                {/* <Image
                  source={{ uri: item }}
                  style={{ width: 279, height: 170 }}
                /> */}
              </View>
            );
          })}
        </ScrollView>
        <View style={{marginTop: 10}}>
          <components.PaymentSystem paymentSystem="Apple Pay" />
          <components.PaymentSystem paymentSystem="Pay Pal" />
          <components.PaymentSystem paymentSystem="Payoneer" />
        </View>
      </View>
    );
  };


  const placeOrder =()=>{
    console.log("----placeOrder-----", products)
    // let objArray=[]
    // let obj={}
    // products.map((item, index) =>{
    //   obj["product_id"] = item.id
    //   obj["quantity"] = item.quantity
    //   objArray.push(obj)
    // })

    let lineItemsArray = products.map((item) => {
      return {
        product_id: item.id,
        quantity: item.quantity
      };
    });


    console.log("-----Array lineItemsArray products-------", lineItemsArray)
    const payload = {
      "payment_method": "bacs",
      "payment_method_title": "Direct Bank Transfer",
      "set_paid": true,
      "billing": {
        "first_name": "John",
        "last_name": "Doe",
        "address_1": "969 Market",
        "address_2": "",
        "city": "San Francisco",
        "state": "CA",
        "postcode": "94103",
        "country": "US",
        "email": "john.doe@example.com",
        "phone": "(555) 555-5555"
      },
      "shipping": {
        "first_name": "John",
        "last_name": "Doe",
        "address_1": "969 Market",
        "address_2": "",
        "city": "San Francisco",
        "state": "CA",
        "postcode": "94103",
        "country": "US"
      },
      "line_items": lineItemsArray,
      //  [
      //   {
      //     "product_id": 93,
      //     "quantity": 2
      //   },
      //   {
      //     "product_id": 22,
      //     "variation_id": 23,
      //     "quantity": 1
      //   }
      // ],
      "shipping_lines": [
        {
          "method_id": "flat_rate",
          "method_title": "Flat Rate",
          "total": total
        }
      ]
    }

    dispatch(PlaceOrderAction(payload)).unwrap().then((result)=>{

      if(result.ok){
console.log("-----SUCCESS PLACE ORDER----")
      }else{

      }
    }).catch((error)=>{

    })


    navigation.navigate(names.Successful)
  }

  const renderFooter = () =>{

    return(
      <components.Button
      title="Place Order"
      containerStyle={{
        position: "absolute",
        paddingHorizontal: 20,
        bottom:60,
      }}
      onPress={() => placeOrder() }
      // or
      // onPress={() => navigation.navigate(names.Failed)}
    />
    )

  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.white}}>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </SafeAreaView>
  );
};

export default Method;
