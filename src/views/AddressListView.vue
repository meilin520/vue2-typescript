<template>
  <div class="address-list">
    <the-header text="收货地址信息" :left-arrow="true"/>
    <div class="address-top">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AddressList } from 'vant';
import { Mutation } from 'vuex-class';
import { TheHeader } from '../components/layout/';
import { AddressInfo } from '../interface/order';

@Component({
  components: {
    TheHeader,
    [AddressList.name]: AddressList,
  },
})
export default class AddressListView extends Vue {

  @Mutation('SAVA_CURR_ADDRESS_INFO')
  public mutationAddressInfo: any;
  private chosenAddressId: string = '';
  private list: AddressInfo[] = [
    {
      id: '1',
      address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      addressDetail: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
      areaCode: '330106',
      city: '杭州市',
      county: '西湖区',
      isDefault: true,
      name: '张三',
      postalCode: '310012',
      province: '浙江省',
      tel: '13000000000',
    },
    {
      id: '2',
      address: '浙江省杭州市拱墅区莫干山路 50 号',
      addressDetail: '浙江省杭州市拱墅区莫干山路 50 号',
      areaCode: '330105',
      city: '杭州市',
      county: '拱墅区',
      isDefault: false,
      name: '李四',
      postalCode: '330000',
      province: '浙江省',
      tel: '13100000000',
    },
  ];
  private disabledList: AddressInfo[] = [
    {
      id: '3',
      name: '王五',
      tel: '1320000000',
      address: '浙江省杭州市滨江区江南大道 15 号',
    },
  ];

  /**
   * 添加地址
   */
  public onAdd(): void {
    // 操作
    this.$router.push({path: '/address-list-edit-view/add'});
  }

  /**
   * 编辑地址
   */
  public onEdit(item: AddressInfo, index: number): void {
    // 操作
    this.mutationAddressInfo(item);
    this.$router.push({path: '/address-list-edit-view/edit'});
  }
}
</script>

<style lang="less" scoped>
  .address-list {
    .address-top {
      margin-top: 10px;
    }
  }
</style>
