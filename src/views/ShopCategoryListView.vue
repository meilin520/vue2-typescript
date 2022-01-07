<template>
  <div class="shop-category-list">
    <div class="top-banner">
      <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" alt="">
    </div>
    <div class="nav__title">
      分类名称
    </div>
    <div class="category-list">
      <van-pull-refresh v-model="refreshing" success-text="刷新成功" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
          <van-grid :column-num="3" :gutter="10">
            <van-grid-item v-for="goods in categoryGoods" :key="goods.id">
              <van-image :src="goods.image" />
            </van-grid-item>
          </van-grid>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Grid, GridItem, Image, List, PullRefresh, Toast } from 'vant';
import { Goods } from '../interface/goods';

@Component({
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
})
export default class ShopCategoryView extends Vue {
  private loading: boolean = false;
  private finished: boolean = false;
  private refreshing: boolean = false;
  private categoryGoods: Goods[] = [
    {
      id: 1,
      name: '商品一',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 2,
      name: '商品二',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 3,
      name: '商品三',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 4,
      name: '商品四',
      image: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
    },
    {
      id: 5,
      name: '商品五',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 6,
      name: '商品六',
      image: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
    },
    {
      id: 7,
      name: '商品七',
      image: 'https://img01.yzcdn.cn/vant/apple-3.jpg',
    },
    {
      id: 8,
      name: '商品八',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 9,
      name: '商品九',
      image: 'https://img01.yzcdn.cn/vant/apple-3.jpg',
    },
    {
      id: 10,
      name: '商品十',
      image: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
    },
  ];

  private onLoad(): void {
    setTimeout(() => {
      const startIndex = this.categoryGoods.length + 1;
      for (let i = 0; i < 5; i++) {
        this.categoryGoods.push({
          id: startIndex + i,
          name: '新商品',
          image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
        });
      }

      // 加载状态结束
      this.loading = true;

      // 数据加载完成
      if (this.categoryGoods.length >= 20) {
        this.finished = true;
      }
    }, 1000);
  }

  private onRefresh(): void {
    this.refreshing = false;
    const startIndex = this.categoryGoods.length + 1;
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push({
        id: startIndex + i,
        name: '新商品',
        image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
      });
    }
    this.categoryGoods = array;
  }
}
</script>

<style lang="less" scoped>
  .shop-category-list {
    .top-banner {
      width: 100%;
      height: 120px;
      padding: 10px;
      box-sizing: border-box;
      img {
        width: inherit;
        height: 100%;
        border-radius: 8px;
      }
    }
    .nav__title {
      display: flex;
      align-items: center;
      margin: 0 10px;
      text-align: left;
      font-size: 18px;
      font-weight: bold;
      &::before {
        margin-right: 4px;
        content: "";
        display: inline-block;
        width: 4px;
        height: 20px;
        background: #1989fa;
      }
    }
    .category-list{
      margin-top: 10px;
      height: calc(100% - 100px);
    }
  }
</style>
