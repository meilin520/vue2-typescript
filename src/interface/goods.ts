/**商品接口
 * [name description]
 * @type {[type]}
 */
export interface Goods {
  id: number;
  name: string;
  image?: string;
  num?: number;
  price?: number;
  stock?: number;
  desc?: number;
  categoryId?: string;
  categoryName?: string;
  tags?: string[];
  [propName: string]: any;
}

/**商品分类接口
 * [id description]
 * @type {[type]}
 */
export interface Category {
  id: number;
  name: string;
}
