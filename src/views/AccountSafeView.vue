<template>
  <div class="account">
    <the-header text="修改密码" :left-arrow="true"/>
    <div class="account-form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.tel"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="form.confirmPass"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ validator: asyncValidator, message: '请填写确认密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Form, Field, Button, Toast } from 'vant';
import { TheHeader } from '../components/layout';

interface  FormInfo {
  tel: string;
  password: string;
  confirmPass: string;
}

@Component({
  components: {
    TheHeader,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
  },
})
export default class AccountSafeView extends Vue {
  private form: FormInfo = {
    tel: '',
    password: '',
    confirmPass: '',
  };

  // 异步校验函数返回 Promise
  public asyncValidator(val: string): Promise<any> {
    return new Promise((resolve) => {
      Toast.loading('验证中...');
      setTimeout(() => {
          Toast.clear();
          if (/^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,18}$/.test(val)) {
            if (val === this.form.password) {
              resolve(true);
            } else {
              Toast('两次输入密码不一致');
            }
          } else {
            Toast('密码有特殊符号且必须包含数字及英文');
          }
        }, 1000);
    });
  }

  public onSubmit(): void {
    Toast('修改成功');
  }
}
</script>

<style lang="css" scoped>
</style>
