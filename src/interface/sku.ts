interface SkuTreeV {
  // skuValueId：规格值 id
  id: string;
  // skuValueName：规格值名称
  name: string;
  // 规格类目图片，只有第一个规格类目可以定义图片
  imgUrl: string;
  // 用于预览显示的规格类目图片
  previewImgUrl: string;
}

interface SkuTree {
  // skuKeyName：规格类目名称
  k: string;
  // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
  k_s: string;
  v: SkuTreeV[];
  //  是否展示大图模式
  largeImageMode: boolean;
}

interface SkuList {
  id: number; // skuId
  s1: string; // 规格类目 k_s 为 s1 的对应规格值 id
  s2: string; // 规格类目 k_s 为 s2 的对应规格值 id
  price: number; // 价格（单位分）
  stock_num: number; // 当前 sku 组合对应的库存
}

interface SkuMessage {
  // 商品留言
  datetime: string; // 留言类型为 time 时，是否含日期。'1' 表示包含
  multiple: string; // 留言类型为 text 时，是否多行文本。'1' 表示多行
  name: string; // 留言名称
  type: string; // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
  required: string; // 是否必填 '1' 表示必填
  placeholder?: string; // 可选值，占位文本
  extraDesc?: string;  // 可选值，附加描述文案
}

interface PlaceholderMap {
  text?: string;
  tel?: string;
  [proName: string]: any;
}

interface InitialMeesage {
  name: string;
}

export interface SkuGoodsInterface {
  // 默认商品sku缩略图
  picture: 'https://img01.yzcdn.cn/1.jpg';
}

export interface MessageConfigInterface {
  // 最大上传体积
  uploadMaxSize?: number;
  // placeholder 配置
  placeholderMap?: PlaceholderMap;
  // 初始留言信息
  initialMessages?: InitialMeesage;
  // 图片上传回调，需要返回一个promise, promise正确执行的结果需要是一个图片url
  uploadImg(): Promise<string>;
  // 可选项，自定义图片上传逻辑，使用此选项时，会禁用原生图片选择
  customUpload(): Promise<string>;
}

export default interface SkuInterface {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: SkuTree[];
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: SkuList[];
  price: string; // 默认价格（单位元）
  stock_num: number; // 商品总库存
  collection_id: number; // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: boolean; // 是否无规格商品
  messages: SkuMessage[];
  hide_stock: boolean; // 是否隐藏剩余库存
}
