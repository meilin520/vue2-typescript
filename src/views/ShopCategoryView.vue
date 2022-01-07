<template>
  <div class="shop-category">
    <the-header text="商品分类"/>
    <div class="sidebar">
      <van-sidebar v-model="activeKey" @change="changeSidebar">
        <van-sidebar-item v-for="category in categorys" :key="category.id" :title="category.name" />
      </van-sidebar>
    </div>
    <div class="sidebar__view">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Sidebar, SidebarItem } from 'vant';
import { TheHeader } from '../components/layout';
import { Category } from '../interface/goods';

@Component({
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    TheHeader,
  },
})
export default class ShopCategoryView extends Vue {
  private activeKey: number = 0;
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
    { id: 10, name: '体育'},
    { id: 11, name: '箱包'},
    { id: 12, name: '饰品'},
    { id: 13, name: '美妆'},
    { id: 14, name: '家装'},
    { id: 15, name: '车品'},
  ];

  private changeSidebar(index: number): void {
    //
  }
}
</script>
<style lang="less" scoped>
  .shop-category {
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
    height: calc(100% - 96px);
    overflow: hidden;
    position: fixed;
    top: 46px;
    right: 0;
    left: 0;
    bottom: 0;
    .sidebar {
      overflow-y: auto;
    }
    .sidebar__view {
      flex: 1;
    }
  }
</style>
