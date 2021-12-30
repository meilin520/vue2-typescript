<template>
    <div class="the-footer">
        <div class="tabbar">
            <div class="tabbar-item">{{item}}</div>    
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {
  @Prop() private text!: string;
}
</script>
<style scoped>
    .the-footer {
        padding: 15px;
        text-align: center;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        color: #dddddd;
    }
</style>