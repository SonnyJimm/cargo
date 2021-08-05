import React, {useLayoutEffect} from "react";
import {KTUtil} from "../../_assets/js/components/util";
import KTLayoutHeader from "../../_assets/js/layout/base/header";
import KTLayoutHeaderMenu from "../../_assets/js/layout/base/header-menu";
import KTLayoutHeaderTopbar from "../../_assets/js/layout/base/header-topbar";
import KTLayoutContent from "../../_assets/js/layout/base/content";
import KTLayoutFooter from "../../_assets/js/layout/base/footer";
import KTLayoutSubheader from "../../_assets/js/layout/base/subheader";
import KTLayoutScrolltop from "../../_assets/js/layout/extended/scrolltop";
import KTLayoutStickyCard from "../../_assets/js/layout/base/sticky-card";

export function LayoutInit() {
  useLayoutEffect(() => {
    // Initialization
    KTUtil.ready(function () {
      // Init Desktop & Mobile Headers
      KTLayoutHeader.init('kt_header', 'kt_header_mobile');

      // Init Header Menu
      KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
      // Init Header Topbar For Mobile Mode
      KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');

      // Init subheader
      KTLayoutSubheader.init('kt_subheader');

      // Init Content
      KTLayoutContent.init('kt_content');

      // Init Footer
      KTLayoutFooter.init('kt_footer');

    
      // Init Scrolltop
      KTLayoutScrolltop.init('kt_scrolltop');

      // Init Sticky Card
      KTLayoutStickyCard.init('kt_page_sticky_card');
    });
  }, []);
  return <></>;
}
