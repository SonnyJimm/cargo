
import { orderItems,Item,orders } from "types/OrderType"

export const getOrders = (Page: number=0) =>{
    let pages = 5
    let index =pages*Page
    return orders.slice(index,index+pages)
}
export const getItems = (OrderId:string) =>{
    let items:Item[] =[]
    orderItems.map((item)=>{
        if(item.orderId == OrderId){
            items.push(item)
        }
    })
    return items
}
export const getItemDetails = (ItemId:string) =>{
    let itemDetail={} as Item
    orderItems.map((item)=>{
        if(item.itemId == ItemId){
            itemDetail = item
            return
        }
    })
    return itemDetail
}