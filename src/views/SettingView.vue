<template>
  <div class="setting">
    <the-header text="设置信息" :left-arrow="true"/>
    <div class="cell-list">
      <van-cell title="账号安全" is-link to="/setting-account-safe-view"/>
    </div>
    <div class="setting-submit">
      <van-button type="danger" round block @click="onLogout">退出登录</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Cell, Toast, Button } from 'vant';
import { TheHeader } from '../components/layout';

@Component({
  components: {
    TheHeader,
    [Cell.name]: Cell,
    [Button.name]: Button,
  },
})
export default class SettingView extends Vue {
  public onLogout(): void {
    Toast('登出');
  }
}
</script>

<style lang="less" scoped>
  .setting {
    .cell-list {
      .van-cell {
        &__title {
          text-align: left;
        }
      }
    }
    &-submit {
      position: absolute;
      left: 0;
      right:  0;
      bottom: 70px;
      padding: 0 10px;
    }
  }
</style>
