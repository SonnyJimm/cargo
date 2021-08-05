export interface OrderType {
  id: string
  orderedDate: string
  transportPrice: number
  productsPrice: number
  paymentMethod: string
  state: string
}
export const orders = [
  {
    id: "1",
    orderedDate: "2021/7/9",
    transportPrice: "10000",
    productsPrice: "2000000",
    paymentMethod: "Online",
    state: "Хүргэсэн",
  },
  {
    id: "2",
    orderedDate: "2021/8/4",
    transportPrice: "9000",
    productsPrice: "303000",
    paymentMethod: "Бэлэн",
    state: "Замдаа",
  },
  {
    id: "3",
    orderedDate: "2021/4/6",
    transportPrice: "90000",
    productsPrice: "465000",
    paymentMethod: "Online",
    state: "Хүргэсэн",
  },
  {
    id: "4",
    orderedDate: "2021/6/8",
    transportPrice: "7000",
    productsPrice: "30000",
    paymentMethod: "Бэлэн",
    state: "Хүргэсэн",
  },
  {
    id: "5",
    orderedDate: "2021/8/1",
    transportPrice: "6000",
    productsPrice: "45600",
    paymentMethod: "Online",
    state: "Замдаа",
  },
  {
    id: "6",
    orderedDate: "2021/7/6",
    transportPrice: "8000",
    productsPrice: "90000",
    paymentMethod: "Бэлэн",
    state: "Замдаа",
  },
]
export const orderItems = [
  {
    itemId:"78",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    transportPrice:"7000",
    link: "https:notactuallink.com/watch/7",
  },
  {
    itemId:"79",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    transportPrice:"7000",
    link: "https:notactuallink.com/watch/7",
  },
  {
    itemId:"80",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    transportPrice:"7000",
    link: "https:notactuallink.com/watch/7",
  },
  {
    itemId:"89",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    transportPrice:"7000",
    link: "https:notactuallink.com/watch/7",
  },
  {
    itemId:"16",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    transportPrice:"7000",
    link: "https:notactuallink.com/watch/7",
  },
  {
    itemId:"45",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    transportPrice:"78000",
    link: "https:notactuallink.com/watch/7",
  },
  {
    itemId:"46",
    orderId: "1",
    image:
      "https://gajitz.com/wp-content/uploads/2012/01/out-of-order-watch-1.jpg",
    itemName: "Watch",
    size: "12x12cm",
    price: "100000",
    weight: "0.5kg",
    link: "https:notactuallink.com/watch/7",
    transportPrice:"7000"
  },
]
export interface Item {
  itemId:string,
  orderId: string
  image: string
  itemName: string
  size: string
  price: string
  weight: string
  link: string
  transportPrice:string
}
