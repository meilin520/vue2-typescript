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
