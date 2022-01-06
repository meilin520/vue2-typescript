<template>
  <div class="home">
    <van-pull-refresh v-model="refreshing" success-text="刷新成功" @refresh="onRefresh">
      <!-- 通告信息 -->
      <div class="notice">
        <van-notice-bar
          left-icon="volume-o"
          :text="noticeInfo"
        />
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <van-search v-model="keywords" placeholder="请输入搜索关键词" @input="onSearch" @clear="onClearSearch"/>
      </div>
      <!-- 轮播图 -->
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 宫格 -->
      <div class="grid">
        <van-grid :gutter="10">
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
      </div>
      <div class="nav__title">
      热销爆款
      </div>
      <div class="grid__horizontal">
        <van-grid :border="false" :gutter="10" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 分类tab -->
      <div class="tabs">
        <van-tabs color="#1989fa">
          <van-tab v-for="category in categorys" :key="category.id" :title="category.name">
          </van-tab>
        </van-tabs>
      </div>
      <!-- 列表 -->
      <div class="list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
          <div class="list-item" v-for="item in list" :key="item.id">
            <img :src="item.image" alt="" />
          </div>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Goods, Category } from '../interface/goods';
import {
  Lazyload,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Search,
  Tab,
  Tabs,
  Image,
  NoticeBar,
  List,
  Toast,
  PullRefresh,
} from 'vant';

Vue.use(Lazyload);

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Image.name]: Image,
    [NoticeBar.name]: NoticeBar,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
  },
})
export default class Home extends Vue {
  private noticeInfo: string = '关于服务器2022年1月30号停服更新，请务必在此之前完成订单操作，以防订单失败。';
  private keywords: string = '';
  private images: string[] = [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ];
  private categorys: Category[] = [
    { id: 1, name: '服装'},
    { id: 2, name: '数码'},
    { id: 3, name: '家电'},
    { id: 4, name: '文具'},
    { id: 5, name: '家具'},
    { id: 6, name: '生活'},
    { id: 7, name: '宠物'},
    { id: 8, name: '玩具'},
    { id: 9, name: '食品'},
  ];
  private list: Goods[] = [
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
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 5,
      name: '商品五',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 6,
      name: '商品六',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id: 7,
      name: '商品七',
      image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
    },
  ];
  private loading: boolean = false;
  private finished: boolean = false;
  private refreshing: boolean = false;

  // 搜索
  private onSearch(value: string): void {
    // console.log(value);
  }
  // 清空搜索
  private onClearSearch(): void {
    this.keywords = '';
  }
  // 下拉刷新
  private onRefresh(): void {
    setTimeout(() => {
      Toast('刷新成功');
      this.refreshing = false;
    }, 1000);
  }
  // 加载更多
  private onLoad(): void {
    setTimeout(() => {
      const startIndex = this.list.length + 1;
      for (let i = 0; i < 5; i++) {
        this.list.push({
          id: startIndex + i,
          name: '新商品',
          image: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
        });
      }

      // 加载状态结束
      this.loading = true;

      // 数据加载完成
      if (this.list.length >= 20) {
        this.finished = true;
      }
    }, 1000);
  }
}
</script>
<style lang="less" scoped>
  .home {
    padding-bottom: 76px;
    .van-pull-refresh{
      overflow: unset;
    }
  }
  .search {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .swipe {
    border-radius: 8px;
    .van-swipe {
      height: 200px;
      margin: 10px 10px 0 10px;
      border-radius: inherit;
    }
    .van-swipe-item {
      height: inherit;
      color: #fff;
      font-size: 20px;
      text-align: center;
      img {
        width: 100%;
        height: inherit;
      }
    }
  }

  .grid {
    margin-top: 10px;
  }

  .grid,
  .grid__horizontal {
    /deep/.van-grid{
      &-item{
        border-radius: 8px;
        &__content{
          border-radius: inherit;
        }
      }
    }
  }

  .nav__title {
    margin: 10px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
  }

  .tabs {
    position: sticky;
    top: 54px;
    left: 0;
    right: 0;
    z-index: 1000;
    /deep/.van-tabs {
      .van-tabs__wrap{
        margin: 10px 0;
        /* border-radius: 8px; */
      }
    }
  }

  .list {
    margin: 0 10px;
    &-item {
      height: 100px;
      border-radius: 6px;
      &:not(:first-of-type) {
        margin-top: 10px;
      }
      img {
        height: inherit;
        width: 100%;
        border-radius: inherit;
      }
    }
  }
</style>
