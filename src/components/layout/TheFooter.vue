<template>
    <div class="the-footer">
        <van-tabbar v-model="active" @change="changeTabbar">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o">用户</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';

@Component({
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
})
export default class TheFooter extends Vue {
    private active: number = 0;

    // 切换tabbar事件
    private changeTabbar(active: number): void {
        // console.log(active);
        switch (active) {
            case 0: this.$router.push({path: '/'}); break;
            case 1: this.$router.push({path: '/shop-category-view'}); break;
            case 2: this.$router.push({path: '/shop-cart-view'}); break;
            case 3: this.$router.push({path: '/user-view'}); break;
        }
    }
}
</script>
<style lang="less" scoped>
    .the-footer {
        padding: 15px;
        text-align: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        color: #dddddd;
        .van-tabbar {
          z-index: 2000;
        }
    }
</style>
