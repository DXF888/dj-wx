export const dpr = window.devicePixelRatio || 1;

export const fetchUrl = 'http://120.55.70.81:8088/dajiaserver/';

export const indexBannerSize = {
  width: 750,
  height: 400,
};

// 分页每页条数 datasouce
export const listPageTotal = 10;

// 首页轮播
export const indexbannerUrl = `${fetchUrl}Rest/Shop/get_recommend_head`;

// 商品
export const mallListUrl = `http://rapapi.org/mockjsdata/20089/api/mallList`;


// 精品推荐
export const BoutiqueUrl = `${fetchUrl}Rest/Shop/get_recommend`;

// 商家详情
export const detailMesUrl = `${fetchUrl}api/detailMes`;

// 评论列表
export const evaluateListUrl = `${fetchUrl}api/evaluateList`;

// 发起评论
export const evaluateUrl = `${fetchUrl}api/evaluate`;

// 登陆
export const loginUrl = `${fetchUrl}api/login`;

// 注册
export const registeUrl = `${fetchUrl}api/register`;

// 改变收藏状态
export const collectUrl = `${fetchUrl}api/collect`;

// 我的收藏
export const userCollectUrl = `${fetchUrl}api/mallList?collect=1`;

// 获取手机验证码
export const getVerifyCode = `${fetchUrl}api/getVerifyCode`;