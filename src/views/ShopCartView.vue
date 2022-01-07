<template>
    <div class="shop-cart">
      <the-header text="购物车"/>
      <!-- 顶部操作栏 -->
      <div class="top-handler">
        <span>管理</span>
      </div>
      
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TheHeader } from '../components/layout';

@Component({
  components: {
    TheHeader,
  },
})
export default class ShopCartView extends Vue {

}
</script>
