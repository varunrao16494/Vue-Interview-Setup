<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="font-bold text-[22px]">{{count}}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore();
    
    const count = computed(() => store.getters['getCount']);

    return {
      count,
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
