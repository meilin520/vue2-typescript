<template>
  <div class="home">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Lazyload, Swipe, SwipeItem, Grid, GridItem } from 'vant';

Vue.use(Lazyload);

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
})
export default class Home extends Vue {
  private images: string[] = [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ];
}
</script>
<style lang="less" scoped>
  .swipe {
    .van-swipe {
      height: 200px;
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
</style>