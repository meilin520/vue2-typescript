<template>
    <div class="shop-cart">
      <the-header text="购物车"/>
      <!-- 顶部操作栏 -->
      <div class="top-handler">
        <span>管理</span>
        <span :class="isEdit?'active-default':'active-edit'" @click="onEdit">{{isEdit?'取消':'编辑'}}</span>
      </div>
      <div class="shop-cart__list">
        <div class="goods-item" v-for="cartGoods in cartGoodsList"
        :key="cartGoods.id">
          <van-checkbox :checked-color="checkedColor" v-model="cartGoods.checked" />
          <van-card
            :num="cartGoods.num"
            :price="cartGoods.price"
            :desc="cartGoods.desc"
            :title="cartGoods.name"
            :thumb="cartGoods.image"
          >
            <template #tags>
              <van-tag plain type="danger" v-for="(tag,index) in cartGoods.tags" :key="index">{{tag}}</van-tag>
            </template>
            <template #footer>
              <van-stepper v-model="cartGoods.num" />
            </template>
          </van-card>
        </div>
      </div>
      <div class="submit-bar">
        <van-submit-bar :price="totalPrice" :button-text="buttonText" :disabled="buttonDisabled" @submit="onSubmit">
          <van-checkbox :checked-color="checkedColor" v-model="checkedAll">全选</van-checkbox>
          <template #tip>
            你的收货地址不支持同城送, <span class="submit-address" @click="onClickEditAddress">修改地址</span>
          </template>
        </van-submit-bar>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SubmitBar, Checkbox, Card, Tag, Stepper } from 'vant';
import { TheHeader } from '../components/layout';
import { Goods } from '../interface/goods';
import { multipleDeleteByKey } from '../libs';

@Component({
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Card.name]: Card,
    [Tag.name]: Tag,
    [Stepper.name]: Stepper,
    TheHeader,
  },
})
export default class ShopCartView extends Vue {
  private buttonText: string = '提交订单';
  private isEdit: boolean = false;
  private cartGoodsList: Goods[] = [
    {
      id: 1,
      name: 'iphon6',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
      num: 1,
      tags: ['新款'],
      checked: false,
      desc: '商品描述',
      price: 1988,
    },
    {
      id: 2,
      name: 'iphone7',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
      num: 1,
      tags: ['新款'],
      checked: false,
      desc: '商品描述',
      price: 2988,
    },
    {
      id: 3,
      name: 'iphone8',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
      num: 1,
      tags: ['新款'],
      checked: false,
      desc: '商品描述',
      price: 3988,
    },
  ];

  // 是否全部选中
  get checkedAll(): boolean {
    return this.cartGoodsList.every((item) => item.checked);
  }

  // 改变选中商品状态
  set checkedAll(value: boolean): void {
    this.cartGoodsList.forEach((element) => {
      element.checked = value;
    });
  }

  // 提交或删除按钮用可性
  get buttonDisabled(): boolean {
    return !this.someChecked;
  }

  // 选中着色变化
  get checkedColor(): string {
    return this.isEdit ? '#ee0a24' : '#1989fa';
  }

  // 是否有选中商品
  get someChecked(): boolean {
    return this.cartGoodsList.some((item) => item.checked);
  }

  // 获取选中商品
  get checkedCartGoodsList(): Goods[] {
    return this.cartGoodsList.filter((item) => item.checked);
  }

  // 获取选中商品总价
  get totalPrice(): number {
    let price = 0;
    if (this.someChecked) {
      price = this.checkedCartGoodsList.reduce((sum, item) => sum + item.price * item.num, 0);
    }
    return price * 100;
  }

  /**
   * 提交订单或删除商品
   * return [void]
   */
  public onSubmit(): void {
    if (this.isEdit) {
      // 删除操作
      if (this.someChecked) {
        const arr = this.checkedCartGoodsList.map((item) => item.id);
        this.cartGoodsList = multipleDeleteByKey(this.cartGoodsList, arr, 'id');
      }
    } else {
      // 提交订单操作
    }
  }

  /**
   * 跳转收货地址配置页面
   * return [void]
   */
  public onClickEditAddress(): void {
    this.$router.push({ path: '/address-list-view'});
  }

  /**
   * 点击编辑按钮操作
   * return [void]
   */
  public onEdit(): void {
    this.isEdit = !this.isEdit;
    this.buttonText = this.isEdit ? '删除' : '提交订单';
  }
}
</script>
<style lang="less" scoped>
  .shop-cart {
    padding-bottom: 70px;
    .top-handler {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      text-align: left;
      background: #FFFFFF;
      .active-default {
        color: #bbbbbb;
      }
      .active-edit {
        color: #1989fa;
      }
    }
    &__list {
      .goods-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        background: #FAFAFA;
        &:not(:first-of-type) {
          margin-top: 10px;
        }
        /deep/.van-card {
          flex: 1;
          .van-card__content {
            text-align: left;
          }
        }
      }
    }
    .submit-bar {
      /deep/.van-submit-bar {
        bottom: 50px;
        .submit-address {
          color: #1989fa;
        }
      }
    }
  }
</style>
