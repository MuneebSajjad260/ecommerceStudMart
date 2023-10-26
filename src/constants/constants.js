import { onboard1 } from "./images";

const endPoints = {
  GetAllCategoryList : "wp-json/wc/v3/products/categories",
  PlaceOrder: "wp-json/wc/v3/orders",
  LogIn: "",
  SignUp: 'wp-json/sm-api/v1/user-password-reset-link',
  ProductsList: "wp-json/wc/v3/products",
  GetProfile: "wp-json/wc/v3/customers/",
  RetrieveOrder:"wp-json/wc/v3/orders/",
  OrderList:'wp-json/wc/v3/orders',
  productsOfCategory:'wp-json/wc/v3/products',
  getUniversities:'wp-json/wc/v3/products/tags',
  manageWhishlist:'wp-json/sm-api/v1/add-to-wishlist',
  wishlistItems:'wp-json/sm-api/v1/get-wishlist-items',
  deleteWishlist:'wp-json/sm-api/v1/delete-all-wishlist-items',
  vendorCount:"wp-json/sm-api/v1/approved-vendor-count",
  vendorList:"wp-json/sm-api/v1/vendor-list",
  brandProduct:"wp-json/sm-api/v1/vendor-products",
  brandDiscount:'wp-json/sm-api/v1/brands-discounts',
  shippingZone:"wp-json/wc/v3/shipping/zones",
  profile:'wp-json/sm-api/v1/user-profile',
  updateProfile:'wp-json/sm-api/v1/update-user-profile',
  uploadVendorRating:'wp-json/sm-api/v1/upload_vendor_rating',
  getSingleRating:'wp-json/sm-api/v1/get-order-review',
  changePassword:'wp-json/sm-api/v1/change-password',
  forgotPass:"wp-json/sm-api/v1/forget-password",
  postNegotiate:"wp-json/sm-api/v1/custom_offers/add_custom_offer",
  contactUs:'wp-json/sm-api/v1/contactus-form',
  offerList:'wp-json/sm-api/v1/custom_offers',
  deleteApi:'wp-json/sm-api/v1/delete-user',
}

const onboardingData = [
  {
    title: "Connect with fellow\nstudents across Qatar.",
    description:
      "Shop products from trusted sellers of any university, and find great deals on a wide range of items.",
    // image: "https://dl.dropbox.com/s/qw5ztn5da7ghrht/01.jpg?dl=0",
    image: onboard1,
    type: "left",
  },
  {
    title: "Negotiate Your Best Price",
    description:
      " Get the best deal on products you want by negotiating with sellers.",
    // image: "https://dl.dropbox.com/s/bv8bs1fycuhbgsc/02.jpg?dl=0",
    image: onboard1,
    type: "center",
  },
  {
    title: "Discount codes",
    description:
      "From fashion to textbooks and university stuff, you can find amazing discounts on your favorite brands.",
    // image: "https://dl.dropbox.com/s/e16cn3keafsazn6/03.jpg?dl=0",
    image: onboard1,
    type: "right",
  },
];

const homeCarousel = [
  {
    id: "0",
    image: "https://dl.dropbox.com/s/1p32eg140p7h7fu/01.png?dl=0",
  },
  {
    id: "1",
    image: "https://dl.dropbox.com/s/1p32eg140p7h7fu/01.png?dl=0",
  },
  {
    id: "2",
    image: "https://dl.dropbox.com/s/1p32eg140p7h7fu/01.png?dl=0",
  },
];

const clothingСategory = [
  {
    title: "Dresses",
    image: "https://dl.dropbox.com/s/6ddjv5m6q74p88e/Dresses.png?dl=0",
  },
  {
    title: "Pants",
    image: "https://dl.dropbox.com/s/i0ompsh9pgx6x04/Pants.png?dl=0",
  },
  {
    title: "Accessories",
    image: "https://dl.dropbox.com/s/osn5w10zjhdunw9/Accessories.png?dl=0",
  },
  {
    title: "Shoes",
    image: "https://dl.dropbox.com/s/4gaweme6kkeydsz/Shoes.png?dl=0",
  },
  {
    title: "T-shirts",
    image: "https://dl.dropbox.com/s/v5y293tx7l7zmxs/T-shirts.png?dl=0",
  },
];

const searchCategories = [
  {
    id: "1",
    title: "Men",
  },
  {
    id: "2",
    title: "woMen",
  },
  {
    id: "3",
    title: "kids",
  },
  {
    id: "4",
    title: "kids",
  },
  {
    id: "5",
    title: "accessories",
  },
];

const orderHistory = [
  {
    id: "1",
    number: "100345",
    date: "Feb 02, 2022 at 8:32 PM",
    total: "36.42",
    status: "Shipping",
    products: [
      {
        id: "1",
        name: "Black Sneakers",
        size: "M",
        color: "red",
        quantity: 1,
        price: 29.95,
      },
      {
        id: "2",
        name: "Denim Shorts",
        size: "S",
        color: "black",
        quantity: 1,
        price: 54.96,
      },
    ],
  },
  {
    id: "2",
    number: "100346",
    date: "May 26, 2021 - 10:38 AM",
    total: "84.12",
    status: "Delivered",
    products: [
      {
        id: "1",
        name: "Hand Bag",
        size: "L",
        color: "blue",
        quantity: 1,
        price: 24.95,
      },
      {
        id: "2",
        name: "Purple Sneakers",
        size: "S",
        color: "black",
        quantity: 1,
        price: 22.87,
      },
    ],
  },
  {
    id: "4",
    number: "100347",
    date: "May 26, 2021 - 10:38 AM",
    total: "52.76",
    status: "Canceled",
    products: [
      {
        id: "1",
        name: "Summer Dress",
        size: "L",
        color: "blue",
        quantity: 1,
        price: 44.65,
      },
      {
        id: "2",
        name: "T-Shirt",
        size: "S",
        color: "black",
        quantity: 1,
        price: 12.95,
      },
    ],
  },
];

const promocodes = [
  {
    id: "1",
    name: "Acme Co.",
    discount: "50% off",
    color: "#F4303C",
    valid_till: "Valid until June 30, 2021",
    image: "https://dl.dropbox.com/s/gi06ny0o9ylm055/01.png?dl=0",
  },
  {
    id: "2",
    name: "Abstergo Ltd.",
    discount: "30% off",
    color: "#EF962D",
    valid_till: "Valid until June 30, 2021",
    image: "https://dl.dropbox.com/s/gfvdb5fjtf5bv2e/02.png?dl=0",
  },
  {
    id: "3",
    name: "Barone LLC.",
    discount: "15% off",
    color: "#00824B",
    valid_till: "Valid until June 30, 2021",
    image: "https://dl.dropbox.com/s/1to09m94qho1qmb/03.png?dl=0",
  },
];

const homeCategories = [
  {
    id: "1",
    name: "Men",
    image: "https://dl.dropbox.com/s/ky66sxpbxqrkn27/men.png?dl=0",
    loaded: false,
  },
  {
    id: "2",
    name: "Women",
    image: "https://dl.dropbox.com/s/5j76kez175yl2zg/women.png?dl=0",
    loaded: false,
  },
  {
    id: "3",
    name: "Kids",
    image: "https://dl.dropbox.com/s/u7ivc2kfw838mxo/kids.png?dl=0",
    loaded: false,
  },
  {
    id: "4",
    name: "Sport",
    image: "https://dl.dropbox.com/s/o2hh7yxzi9e302n/sport.png?dl=0",
    loaded: false,
  },
  {
    id: "5",
    name: "Accessories",
    image: "https://dl.dropbox.com/s/vd99jhe9sxvnyah/accessories.png?dl=0",
    loaded: false,
  },
];

const banner = "https://dl.dropbox.com/s/rhjldpcg8jkk505/02.png?dl=0";

const requestMethods = {
    POST: 'POST',
    GET: 'get',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
}

// const Base_Url = "https://woo-slowly-shiny-wombat.wpcomstaging.com/";
// const Base_Url = "https://woo-generously-ghostly-destiny.wpcomstaging.com/";
// const Consumer_Key = "ck_41443b9d22f6df407deaf10f9b31fb3e32e2acd1"
// const Consumer_Secret = "cs_62b8d37fc83f6c806a25890192c5e20e776187bf"

// ------------LIVE--------------
const Base_Url = "https://studmart.com/"
const Consumer_Key = "ck_8c5cca60651f850b00f2eca22aabf421bc9cd685"
const Consumer_Secret = "cs_a258453cfc722000bedba56a512e3bf0575585da"
const Consumer_Params = `?consumer_key=${Consumer_Key}&consumer_secret=${Consumer_Secret}`
const Payload_Keys = {
  consumer_key: Consumer_Key,
  consumer_secret: Consumer_Secret
}

export {
  homeCarousel,
  onboardingData,
  banner,
  clothingСategory,
  searchCategories,
  orderHistory,
  promocodes,
  homeCategories,
  requestMethods,
  endPoints,
  Base_Url,
  Consumer_Key,
  Consumer_Secret,
  Consumer_Params,
  Payload_Keys,
};
