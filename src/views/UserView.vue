<template>
    <div class="mine">
      <the-header text="我的" />
      <!-- 顶部个人信息 -->
      <div class="top-intro">
        <van-icon class="top-intro__edit" name="edit" color="#bbbbbb" @click="onEdit"/>
        <div class="top-intro__avatar">
          <van-image
            round
            width="60"
            height="60"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div class="top-intro_list">
          <div>你好世界</div>
          <div>为人类的未来而奋斗。</div>
        </div>
      </div>
      <!-- 单元cell -->
      <div class="cell-list">
        <van-cell title="优惠券" value="2张可用" is-link to="/coupon-list-view"/>
        <van-cell title="收货地址" value="未设置" is-link to="/address-list-view"/>
        <van-cell title="意见反馈" is-link to="/feedback-view" />
        <van-cell title="设置" is-link to="/setting-view"/>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Icon, Toast, Cell, Image } from 'vant';
import { TheHeader } from '../components/layout';

@Component({
  components: {
    TheHeader,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Image.name]: Image,
  },
})
export default class UserView extends Vue {
  /**
   * 编辑个从信息
   * @type {String}
   */
  public onEdit(): void {
    this.$router.push({ path: '/user-edit-view' });
  }
}
</script>
<style lang="less" scoped>
  .mine {
    padding: 10px;
    .top-intro {
      height: 150px;
      padding-top: 20px;
      text-align: center;
      box-sizing: border-box;
      border-radius: 8px;
      background: -webkit-linear-gradient(right, #1989FA, #FFFFFF);
      /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #1989FA, #FFFFFF);
      /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #1989FA, #FFFFFF);
      /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #1989FA, #FFFFFF);
      position: relative;
      &__edit {
        position: absolute;
        right: 10px;
        top: 10px;
      }
      &__avatar {
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      &_list {
        color: #FFFFFF;
        >div{
          &:first-of-type {
            font-family: sans-serif;
            font-weight: 550;
            font-size: 16px;
          }
          &:last-of-type {
            font-size: 12px;
          }
        }
      }
    }
    .cell-list {
      /deep/.van-cell {
        margin-top: 10px;
        border-radius: 8px;
        &__title {
          text-align: left;
        }
      }
    }
  }
</style>
