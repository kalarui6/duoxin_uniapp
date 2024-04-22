"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/circle/index.js";
  "./pages/my/index.js";
  "./pages/chat/index.js";
  "./pages/community/index.js";
}
const _sfc_main = {
  globalData: {
    sysInfo: {}
  },
  onLaunch: function() {
    console.log("App Launch");
    const menuButtonObject = common_vendor.index.getMenuButtonBoundingClientRect();
    common_vendor.index.getSystemInfo().then((res) => {
      const navHeight = menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2;
      const rootFontSize = 100 * res.windowWidth / 375;
      this.globalData.sysInfo = {
        statusbarHeight: res.statusBarHeight,
        navHeight,
        rootFontSize
      };
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/aProject/qingliao-fe/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
