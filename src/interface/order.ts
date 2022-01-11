export interface AddressInfo {
  // 每条地址的唯一标识
  id?: string | number;
  // 收货人姓名
  name?: string;
  // 收货人手机号
  tel?: string;
  // 省份
  province?: string;
  // 地市
  city?: string;
  // 区县
  county?: string;
  // 完整地址
  address?: string;
  // 详细地址
  addressDetail?: string;
  // 地区编码
  areaCode?: string;
  // 邮政编码
  postalCode?: string;
  // 是否默认
  isDefault?: boolean;
}

export interface CouponInfo {
  // 优惠券id
  id?: string | number;
  // 优惠券名称
  name?: string;
  // 满减条件
  condition?: string;
  // 卡生效日期（时间戳，单位毫秒）
  startAt?: number;
  // 卡失效日期（时间戳，单位毫秒）
  endAt?: number;
  // 描述信息，优惠券可用时展示
  description?: string;
  // 不可用原因，优惠券不可用时展示
  reason?: string;
  // 折扣券优惠金额，单位分
  value?: number;
  // 折扣券优惠金额方案
  valueDesc?: string;
  // 单位方案
  unitDesc?: string;
  // 自定义有效时间方案
  custromValidPeriod?: string;
  // 自定参数
  [propName: string]: any;
}
