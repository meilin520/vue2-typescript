<template>
  <div class="address-list">
    <the-header text="购物车" :left-arrow="true"/>
    地址页面
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TheHeader } from '../components/layout/';

@Component({
  components: {
    TheHeader,
  },
})
export default class AddressListView extends Vue {
  //
}
</script>

<style lang="less" scoped>
  .address-list {

  }
</style>
