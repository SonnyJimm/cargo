/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { getOrders } from "utils";
import { useState} from "react";
export function AdvanceTablesWidget1({ className ,select}) {
  let [orders,setOrder]=useState(getOrders)
  // React.useEffect(()=>{

  //   setOrders(order)
  //   console.log(orders)
  //   console.log(order)
  // },[])
  // const changePage =(Page)=>{
  //   setOrders(getOrders(Page-1))
  // }

  return (
    <div className={`card card-custom ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
           Захиалагын жагсаалт
          </span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body py-0">
        {/* begin::Table */}
        <div className="table-responsive">
          <table
            className="table table-head-custom table-vertical-center"
            id="kt_advance_table_widget_1"
          >
            <thead>
              <tr className="text-left">
                
                <th className="pr-0" style={{ minWidth: "150px" }}>
                  Захиалагын дугаар
                </th>
                <th style={{ minWidth: "150px" }}>Захиалага хийсэн Хугацаа</th>
                <th style={{ minWidth: "150px" }}>Хүргэлтийн Төлбөр</th>
                <th style={{ minWidth: "150px" }}>Барааны нийт Төлбөр</th>
                <th style={{ minWidth: "150px" }}>Төлбөрийн хэлбэр</th>
                <th style={{ minWidth: "150px" }}>Төлөв</th>
              </tr>
            </thead>
            <tbody>

                  {orders.map((order)=>(
                     <tr>
                     <td >
                       <a onClick={()=>{select(order.id)}}> {order.id}</a>
                     </td>
                     <td>
                       {order.orderedDate}
                     </td>
                     <td>
                       {order.transportPrice}
                     </td>
                     <td>
                       {order.productsPrice}
                     </td>
                     <td>
                       {order.paymentMethod}
                     </td>
                     <td>
                       {order.state}
                     </td>
                   </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {/* end::Table */}
      </div>
      {/* end::Body */}
    </div>
  );
}