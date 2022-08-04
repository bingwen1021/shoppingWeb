// api进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";

// 三级联动接口
export const reqCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });

// 获取banner接口
export const reqGetBannerList = () => mockRequests.get("/banner");

// 获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
