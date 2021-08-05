/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { getItemDetails } from "utils"
import Step from "@material-ui/core/Step"
import { toAbsoluteUrl } from "../../../_helpers"
import Stepper from "@material-ui/core/Stepper"
import StepLabel from "@material-ui/core/StepLabel"
import { useState, useEffect } from "react"

export function ListsWidget11({ className, select }) {
  const [itemDetail, setItemDetail] = useState(getItemDetails(select))
  useEffect(() => {
    setItemDetail(getItemDetails(select))
  }, [select])
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Барааны мэдээлэл
          </h3>
        </div>

        {/* Body */}
        <div className="card-body pt-0">
          <div class="row">
            <div className="col-sm">
              Бүтээгдэхүүний нэр : {itemDetail.itemName}
            </div>
            <div className="col-sm">
              Бүтээгдэхүүний хөтлөх линк :{" "}
              <a href={toAbsoluteUrl(itemDetail.link)}>Энд дарна уу</a>
            </div>
          </div>
          <hr />
          <div class="row">
            <div className="col-sm">Бодит хэмжээ : {itemDetail.size}</div>
            <div className="col-sm">Бодит жин : {itemDetail.weight}</div>
          </div>
          <hr />
          <div class="row">
            <div className="col-sm">Барааны үнэ : {itemDetail.price}</div>
            <div className="col-sm">
              Хүргэлтийн үнэ : {itemDetail.transportPrice}
            </div>
          </div>
          <Stepper activeStep={1}>
            <Step>
              <StepLabel>Toaboa Storage</StepLabel>
            </Step>
            <Step>
              <StepLabel>Our Storage</StepLabel>
            </Step>
            <Step>
              <StepLabel>Mongolian our Storage</StepLabel>
            </Step>
          </Stepper>
        </div>
      </div>
    </>
  )
}
