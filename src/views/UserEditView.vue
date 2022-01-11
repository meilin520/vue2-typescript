<template>
<div class="user-edit">
  <the-header text="编辑用户信息" :left-arrow="true" />
  <van-form @submit="onSubmit">
    <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
    <van-field name="uploader" label="头像上传" :before-read="asyncBeforeRead" :deletable="false">
      <template #input>
        <van-uploader v-model="form.uploader" />
      </template>
    </van-field>
    <van-field v-model="form.signText" name="签名" label="个性签名" placeholder="个性签名"/>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
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
  Uploader,
  Toast,
} from 'vant';
import {
  TheHeader,
} from '../components/layout';

interface UploaderInfo {
  url ?: string;
}

interface FormInfo {
  username: string;
  uploader?: UploaderInfo[];
  signText?: string;
}

@Component({
  components: {
    TheHeader,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
  },
})
export default class UserEditView extends Vue {
  private form: FormInfo = {
    username: '',
    uploader: [{url: 'https://img01.yzcdn.cn/vant/cat.jpeg'}],
    signText: '',
  };

  // 返回 Promise
  public asyncBeforeRead(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        reject();
      } else {
        const img = new File(['foo'], 'bar.jpg', {
          type: 'image/jpeg',
        });
        resolve(img);
      }
    });
  }

  /**
   * 提交用户信息
   * @type {String}
   */
  public onSubmit(): void {
    Toast('成功');
  }
}
</script>

<style lang="less" scoped>
.user-edit {
    }
</style>
