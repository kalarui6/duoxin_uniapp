"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    login: () => {
      common_vendor.index.getUserProfile({
        lang: "zh_CN",
        desc: "用户登录",
        // 声明获取用户个人信息后的用途，后续会展示在弹窗中，
        success: (res) => {
          console.log(res, "resss");
        },
        fail: (err) => {
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.login && $options.login(...args)),
    c: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/aProject/qingliao-fe/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
