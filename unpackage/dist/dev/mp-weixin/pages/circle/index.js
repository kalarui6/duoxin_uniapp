"use strict";
const common_vendor = require("../../common/vendor.js");
const index = {
  data() {
    return {
      sysInfo: {
        statusbarHeight: 0,
        navHeight: 0
      },
      list1: [
        {
          name: "推荐"
        },
        {
          name: "资讯"
        },
        {
          name: "相亲"
        },
        {
          name: "活动"
        }
      ]
    };
  },
  methods: {
    click(item) {
      console.log("item", item);
    }
  },
  onLoad() {
    this.sysInfo = getApp().globalData.sysInfo;
    console.log(getApp());
  }
};
const _sfc_main = index;
if (!Array) {
  const _easycom_up_tabs2 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_sticky2 = common_vendor.resolveComponent("up-sticky");
  const _component_UserSpeak = common_vendor.resolveComponent("UserSpeak");
  (_easycom_up_tabs2 + _easycom_up_sticky2 + _component_UserSpeak)();
}
const _easycom_up_tabs = () => "../../node-modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_up_sticky = () => "../../node-modules/uview-plus/components/u-sticky/u-sticky.js";
if (!Math) {
  (_easycom_up_tabs + _easycom_up_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.sysInfo.rootFontSize + "px",
    b: _ctx.sysInfo.rootFontSize + "px",
    c: _ctx.sysInfo.statusbarHeight + "px",
    d: _ctx.sysInfo.navHeight + "px",
    e: common_vendor.p({
      list: _ctx.list1
    }),
    f: common_vendor.p({
      bgColor: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/aProject/qingliao-fe/pages/circle/index.vue"]]);
wx.createPage(MiniProgramPage);
