<template>
  <div class="shop-goods-details">
    <the-header text="商品详情" :left-arrow="true"/>
    <div class="goods-swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goods-nav">
      <div class="goods-price">
        ￥28
      </div>
      <div class="goods-title">
        商品名称
      </div>
      <div class="goods-sku">
        <van-cell title="商品规格" value="选择规格" is-link @click="handleSku"/>
      </div>
    </div>
    <!-- 详情富文本区域 -->
    <div class="goods-richtext">
      <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" alt="">
      <img src="https://img01.yzcdn.cn/vant/apple-2.jpg" alt="">
      <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" alt="">
    </div>
    <!-- 底部操作栏 -->
    <div class="goods-submit">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>

    <!-- 商品规格sku弹窗 -->
    <van-sku
      v-model="showSku"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Lazyload, Swipe, SwipeItem, Cell, Sku, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { TheHeader } from '../components/layout';
import SkuInterface, { MessageConfigInterface, SkuGoodsInterface } from '../interface/sku';

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Cell.name]: Cell,
    [Sku.name]: Sku,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    TheHeader,
  },
})
export default class ShopGoodsDetailsView extends Vue {
  private images: string[] = [
    'https://img01.yzcdn.cn/vant/apple-1.jpg',
    'https://img01.yzcdn.cn/vant/apple-2.jpg',
    'https://img01.yzcdn.cn/vant/apple-3.jpg',
    'https://img01.yzcdn.cn/vant/apple-4.jpg',
  ];
  private showSku: boolean = false;
  private sku: SkuInterface = {
    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    tree: [
      {
        k: '颜色', // skuKeyName：规格类目名称
        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        v: [
          {
            id: '1', // skuValueId：规格值 id
            name: '红色', // skuValueName：规格值名称
            imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
            previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
          },
          {
            id: '1',
            name: '蓝色',
            imgUrl: 'https://img01.yzcdn.cn/2.jpg',
            previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
          },
        ],
        largeImageMode: true, //  是否展示大图模式
      },
    ],
    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
    list: [
      {
        id: 2259, // skuId
        s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
        s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
        price: 100, // 价格（单位分）
        stock_num: 110, // 当前 sku 组合对应的库存
      },
    ],
    price: '1.00', // 默认价格（单位元）
    stock_num: 227, // 商品总库存
    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
    none_sku: false, // 是否无规格商品
    messages: [
      {
        // 商品留言
        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
        multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
        name: '留言', // 留言名称
        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        required: '1', // 是否必填 '1' 表示必填
        placeholder: '', // 可选值，占位文本
        extraDesc: '',  // 可选值，附加描述文案
      },
    ],
    hide_stock: false, // 是否隐藏剩余库存
  };
  private goods: SkuGoodsInterface = {
    // 默认商品 sku 缩略图
    picture: 'https://img01.yzcdn.cn/1.jpg',
  };
  private messageConfig: MessageConfigInterface = {
    // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
    uploadImg: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
      });
    },
    // 可选项，自定义图片上传逻辑，使用此选项时，会禁用原生图片选择
    customUpload: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('https://img01.yzcdn.cn/vant/leaf.jpg');
        }, 1000);
      });
    },
    // 最大上传体积 (MB)
    uploadMaxSize: 3,
    // placeholder 配置
    placeholderMap: {
      text: 'xxx',
      tel: 'xxx',
    },
    // 初始留言信息
    // 键：留言 name
    // 值：留言内容
    initialMessages: {
      name: '留言信息',
    },
  };
  private goodsId: number|null = null;
  private quota: number = 0;
  private quotaUsed: number = 0;

  private handleSku(): void {
    this.showSku = true;
  }

  private onBuyClicked(): void {
    //
  }

  private onAddCartClicked(): void {
    //
  }
}
</script>

<style lang="less" scoped>
  .shop-goods-details {
    .goods-swipe {
      height: 300px;
      width: 100%;
      .van-swipe {
        height: inherit;
        width: inherit;
        img {
          width: inherit;
          height: inherit;
        }
      }
    }
    .goods-nav {
      padding: 10px;
      background: #FFFFFF;
      text-align: left;
      .goods-price {
        font-size: 20px;
        color: #f20c00;
      }
      .goods-title {

      }
      .goods-sku {
        /deep/.van-cell {
          padding: 0;
          font-size: 12px;
          &__title {
            span {
              padding: 2px;
              color: #FFFFFF;
              background: #f20c00;
            }
          }
        }
      }
    }

    .goods-richtext {
      width: 100%;
      img {
        width: inherit;
      }
    }
  }
</style>
