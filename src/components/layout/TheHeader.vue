<template>
    <div class="the-header">
        <van-nav-bar
        :title="text"
        :left-arrow="leftArrow"
        @click-left="clickLeft"
        />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';

@Component({
    components: {
        [NavBar.name]: NavBar,
    },
})
export default class TheHeader extends Vue {
  @Prop()
  private text!: string;

  @Prop({ default: false})
  private leftArrow?: boolean;

  private clickLeft = (): void => {
      this.$router.go(-1);
  }
}
</script>
<style scoped>
    .the-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>