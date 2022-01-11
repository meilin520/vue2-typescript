<template>
<div class="feedback">
  <the-header text="意见反馈" :left-arrow="true" />
  <div class="feedback-form">
    <van-form @submit="onSubmit">
      <van-field v-model="message" rows="2" :autosize="{ maxHeight: 500, minHeight: 300 }" type="textarea" maxlength="150" placeholder="请输入留言" show-word-limit />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
} from 'vue-property-decorator';
import {
  Form,
  Field,
  Button,
  Toast,
} from 'vant';
import {
  TheHeader,
} from '../components/layout';

@Component({
  components: {
    TheHeader,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
})
export default class FeedbackView extends Vue {
  private message: string = '';

  public onSubmit(): void {
    Toast('提交留言');
  }
}
</script>

<style lang="less" scoped>
.feedback {
  padding: 10px;
  &-form {
    border-radius: 8px;
    /deep/.van-form {
      border-radius: inherit;
      .van-field {
        border-radius: inherit;
      }
    }
  }
}
</style>
