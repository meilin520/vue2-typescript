<template>
    <div class="mine">
      <the-header text="我的" />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TheHeader } from '../components/layout';

@Component({
  components: {
    TheHeader,
  },
})
export default class UserView extends Vue {
  //
}
</script>
