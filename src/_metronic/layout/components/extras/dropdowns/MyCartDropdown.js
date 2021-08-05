/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_helpers";
import { DropdownTopbarItemToggler } from "../../../../_partials/dropdowns";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};


export function MyCartDropdown() {
  const bgImage = toAbsoluteUrl("/media/misc/bg-1.jpg");
  return (
    <Dropdown drop="down" alignRight>
      <Dropdown.Toggle
        as={DropdownTopbarItemToggler}
        id="dropdown-toggle-my-cart-toggle"
      >
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="mycart-panel-tooltip">Хэрэглэгчийн сагс</Tooltip>}
        >
          <div className="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Cart3.svg")} />
            </span>
          </div>
        </OverlayTrigger>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-xl dropdown-menu-anim-up">
        <form>
          <div
            className="d-flex align-items-center py-10 px-8 bgi-size-cover bgi-no-repeat rounded-top"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <span className="btn btn-md btn-icon bg-white-o-15 mr-4">
              <i className="flaticon2-shopping-cart-1 text-success"></i>
            </span>
            <h4 className="text-white m-0 flex-grow-1 mr-3">Миний сагс</h4>
          </div>
          <PerfectScrollbar
            options={perfectScrollbarOptions}
            className="scroll"
            style={{ maxHeight: "35vh", position: "relative" }}
          >

            <div className="separator separator-solid"></div>

            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <span className="text-muted">Дусал натри холорид</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-3">
                    ₮ 65000
                  </span>
                  <span className="text-muted mr-1">байна</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-3">
                    4
                  </span>
                  <button className="btn btn-xs btn-light-success btn-icon mr-2" onClick={()=>{console.log("nemlee");}}><i className="ki ki-minus icon-xs"/></button>
                  <button className="btn btn-xs btn-light-success btn-icon" onClick={()=>{console.log("haslaa");}}><i className="ki ki-plus icon-xs"/></button>
                </div>
              </div>
            </div>

            <div className="separator separator-solid"></div>

            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <span className="text-muted">
                  Амогцолын
                </span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-sm">
                    ₮ 15000
                  </span>
                  <span className="text-muted mr-1">байна</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-sm">
                    3
                  </span>
                  <button className="btn btn-xs btn-light-success btn-icon mr-2" onClick={()=>{console.log("nemlee");}}><i className="ki ki-minus icon-xs"/></button>
                  <button className="btn btn-xs btn-light-success btn-icon" onClick={()=>{console.log("haslaa");}}><i className="ki ki-plus icon-xs"/></button>
                </div>
              </div>
            </div>

            <div className="separator separator-solid"></div>

            <div className="d-flex align-items-center justify-content-between p-8">
              <div className="d-flex flex-column mr-2">
                <span className="text-muted">Парацетэрмол</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-sm">
                    ₮ 10000
                  </span>
                  <span className="text-muted mr-1">байна</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-sm">
                    7
                  </span>
                  <button className="btn btn-xs btn-light-success btn-icon mr-2" onClick={()=>{console.log("nemlee");}}><i className="ki ki-minus icon-xs"/></button>
                  <button className="btn btn-xs btn-light-success btn-icon" onClick={()=>{console.log("haslaa");}}><i className="ki ki-plus icon-xs"/></button>
                </div>
              </div>
            </div>
          </PerfectScrollbar>

          <div className="p-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Сонгосон барааны дүн
              </span>
              <span className="font-weight-bolder text-dark-50 text-right">
                ₮10000.00
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-7">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Нийт мөнгөн дүн
              </span>
              <span className="font-weight-bolder text-primary text-right">
                ₮50000.00
              </span>
            </div>
            <div className="text-right">
              <button
                type="button"
                className="btn btn-primary text-weight-bold"
                onClick={()=> {console.log("zahialag hiigdelee");}}
              >
                Захиалах
              </button>
            </div>
          </div>
        </form>
      </Dropdown.Menu>
    </Dropdown>
  );
}
