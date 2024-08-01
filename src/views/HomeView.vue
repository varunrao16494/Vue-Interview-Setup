<script>
import { defineComponent, onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const searchBy = ref('');
    const filterBy = ref('');

    const languageList = ['en', 'ch', 'ar', 'es', 'fr', 'ru'];

    const filteredList = computed(() => {
      let filter = store.getters['getList'];
        if (searchBy.value) {
          filter = filter.filter(m => {
            return m.title.includes(searchBy.value) ||  m.id.includes(searchBy.value)
          })
        } else if (filterBy.value) {
          filter = filter.filter(m => {
            return m.language === filterBy.value
          })
        }
        return filter;
    })

    onMounted(() => {
      store.dispatch('getList');
    })
    return {
      searchBy,
      filterBy,
      languageList,
      filteredList
    }
  }
})
</script>

<template>
  <main>
      <section class="flex bg-white mx-10 shadow-md gap-5 justify-center items-center">
        <div class="w-[80%]">
          <input v-model.lazy="searchBy" class="w-full border-blue-300 border-2 rounded-full py-3 px-5" type="text" placeholder="Search by course name or id" />
        </div>
        <select v-model="filterBy" class="bg-slate-400 rounded-2xl my-5">
          <option disabled value="">Filter</option>
          <option v-for="lang in languageList" :key="lang">{{lang}}</option>
        </select>
      </section>

      <section>
        <h4>{{filteredList.length}} results</h4>
        <div class="flex flex-wrap gap-5 space-y-3 w-full justify-center">
          <article v-for="item in filteredList" :key="item.id" class="flex flex-col shadow-md w-96 rounded-md h-1/4" @click="$router.push(`/article/${item.id}`)">
            <img :src="item.image_url" :alt="item.title" class="w-full h-36 rounded-t-md">

            <span class="text-gray-500">Partner Name</span>

            <p class="text-wrap text-lg">
              {{item.title}}
            </p>
            <div class="flex justify-between">
              <span class="text-green-600">{{item.pacing}}</span>
              <span class="text-slate-400">{{item.language}}</span>
            </div>
          </article>
        </div>
      </section>
  </main>
</template>
