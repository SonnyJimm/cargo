/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */

import React from "react"
import "./ListWidget.css"
import { useEffect } from "react"
import { useState } from "react"
import { getItems } from "utils"
import { toAbsoluteUrl } from "_metronic/_helpers"
export function ListsWidget10({ className, select ,selectItem}) {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(getItems(select))
    console.log("selected item : " + select)
    console.log(items)
    console.log(getItems(select))
  }, [])
  useEffect(() => {
    if (select != null) {
      setItems(getItems(select))
    }
  }, [select])
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Захиалагсан Бараа
          </h3>
        </div>

        {/* Body */}
        <div id="flex" style={{width: 400}}>
        {items.map((item) => (
          <div onClick={()=>{selectItem(item.itemId)}} className="card-body pt-0">
            <div className="card" style={{ width: 150 }}>
              <img
                className="card-img-top"
                src={toAbsoluteUrl(item.image)}
                alt="Card image cap"
              />
             
               <div style={{padding:5,}}>
                 Price : {item.price}
               </div>

            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
