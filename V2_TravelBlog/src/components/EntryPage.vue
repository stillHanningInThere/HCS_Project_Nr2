<template>
  <div class="entryWrapper">
    <NavHeader />
  </div>
</template>

<script>
import NavHeader from "./NavHeader.vue";

export default {
  components: {
    NavHeader,
  },
};
</script>

<style scoped>
.entryWrapper {
  display: flex;
  flex-direction: column;
}
</style>
