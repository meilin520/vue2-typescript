<template>
    <div class="the-header">
        {{text}}
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
  @Prop() private text!: string;
}
</script>
<style scoped>
    .the-header {
        min-height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 15px;
        text-align: center;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        color: #eeeeee;
        background: #3377ff;
    }
</style>