<template>
  <div class="account-safe">
    <the-header text="账号安全" :left-arrow="true"/>
    <div class="cell-list">
      <van-cell title="修改密码" is-link to="/account-safe-view"/>
      <van-cell title="账号注销" is-link @click="onCancel"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Cell, Dialog, Toast } from 'vant';
import { TheHeader } from '../components/layout';

@Component({
  components: {
    TheHeader,
    [Cell.name]: Cell,
  },
})
export default class SettingAccountSafeView extends Vue {
  public onCancel(): void {
    const beforeClose = (action: string, done: any): void => {
      if (action === 'confirm') {
        setTimeout(() => {
          done();
          Toast('注销成功');
        }, 1000);
      } else {
        done();
        Toast('已取消');
      }
    };

    Dialog.confirm({
      title: '账号注销确认',
      message: '账号一旦注销，其关联的订单信息都会清除，您确认注销当前账号吗?',
      beforeClose,
    });
  }
}
</script>

<style lang="less" scoped>
  .account-safe {
    .cell-list {
      /deep/.van-cell {
        &__title {
          text-align: left;
        }
      }
    }
  }
</style>
