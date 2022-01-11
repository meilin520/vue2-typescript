<template>
  <div class="address-list-edit">
    <the-header :text="addressText" :left-arrow="true"/>
    <van-address-edit
      ref="addressEdit"
      :area-list="areaList"
      :address-info="addressInfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AddressEdit, Toast } from 'vant';
import { areaList } from '@vant/area-data';
import { Getter } from 'vuex-class';
import { TheHeader } from '../components/layout';
import { AddressInfo } from '../interface/order';

interface SearchResult {
  name: string;
  address: string;
}

@Component({
  components: {
    [AddressEdit.name]: AddressEdit,
    TheHeader,
  },
})
export default class AddressListEditView extends Vue {

  get addressText() {
    switch (this.type) {
      case 'add': return '添加地址信息'; break;
      case 'edit': return '编辑地址信息'; break;
      default: return '添加地址信息';
               break;
    }
  }

  @Getter('currAddressInfo')
  public getterAddressInfo: any;
  private areaList: object = areaList;
  private searchResult: SearchResult[] = [];
  private addressInfo: AddressInfo = {};
  private type: string|null|undefined = this.$route.params.type;

  public mounted() {
    this.addressInfo = this.getterAddressInfo;
  }

  /**
   * 保存
   * return [void]
   */
  public onSave(content: AddressInfo): void {
    // 操作
    if (this.type === 'add') {
      // 新增操作
      Toast('新增');
    } else if (this.type === 'edit') {
      // 编辑操作
      Toast('编辑');
    } else {
      // do something
    }
  }

  /**
   * 删除
   * @type {String}
   */
  public onDelete(): void {
    // 操作
    Toast('delete');
  }

  /**
   * 详细地址改变
   * @type {String}
   */
  public onChangeDetail(val: string): void {
    // 操作
    if (val) {
      this.searchResult = [
        {
          name: '黄龙万科中心',
          address: '杭州市西湖区',
        },
      ];
    } else {
      this.searchResult = [];
    }
  }
}
</script>

<style lang="less" scoped>
  .address-list-edit {

  }
</style>
