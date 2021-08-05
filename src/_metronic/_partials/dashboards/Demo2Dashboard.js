import React from "react"
import { useState, useEffect } from "react"
import { ListsWidget10, ListsWidget11, AdvanceTablesWidget1 } from "../widgets"

export function Demo2Dashboard() {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const select = (itemId) => {
    if (selectedOrder === itemId) {
      
      setSelectedOrder(null)
    } else {
      setSelectedOrder(itemId)
    }
    setSelectedItem(null)
  }
  const selectItem = (itemId) => {
    if (selectedItem === itemId) {
      setSelectedItem(null)
    } else {
      setSelectedItem(itemId)
    }
    console.log("Selected item :" + selectedItem)
  }
  useEffect(() => {
    console.log(selectedOrder)
  }, [selectedOrder])
  return (
    <>
      {/* begin::Dashboard */}
      {/* begin::Row */}
      <div className="row">
        <div className="col-lg-12 col-xxl-12">
          <AdvanceTablesWidget1
            className="card-stretch gutter-b"
            select={select}
          />
        </div>
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className="row">
        {selectedOrder ? (
          <div className="col-lg-6">
            <ListsWidget10
              className="card-stretch gutter-b"
              select={selectedOrder}
              selectItem={selectItem}
            />
          </div>
        ) : (
          <div></div>
        )}
        {selectedItem ? (
          <div className="col-lg-6">
          <ListsWidget11
            className="card-stretch gutter-b"
            select={selectedItem}
          />
        </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* end::Row */}

      {/* end::Dashboard */}
    </>
  )
}
