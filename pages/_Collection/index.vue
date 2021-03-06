<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div v-if="collection" class="relative max-w-lg mx-auto lg:max-w-7xl">
      <div>
        <h2
          class="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >{{ collection.label }}</h2>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
          <p class="text-xl leading-7 text-gray-500">{{ collection.description }}</p>
        </div>
      </div>
      <div
        class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12"
      >
        <div v-for="post in list" :key="post.fields._id.stringValue">
          <p class="text-sm leading-5 text-gray-500">
            <time
              :datetime="toDate(post.fields._createDate.stringValue, 'YYYY-MM-DD')"
            >{{ toDate(post.fields._createDate.stringValue, "DD/MM/YYYY hh:mm:ss") }}</time>
          </p>
          <h3
            class="mt-2 text-xl leading-7 font-semibold text-gray-900"
          >{{ post.fields.title.stringValue }}</h3>
          <div class="mt-3">
            <nuxt-link
              :to="`/${collection.name}/${post.fields._id.stringValue}`"
              class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
            >Leia mais</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import dayjs from "dayjs";

export default {
  name: "IndexCollection",
  layout: "default",
  components: {},
  filters: {},
  props: {},
  data: function() {
    return {
      list: []
    };
  },
  async fetch({ store, params }) {},
  async asyncData({ store, params, error, $axios }) {
    await store.dispatch('CollectionStore/setupCollections');
    
    try {
      const list = await $axios.$get((process.env.firestoreUrl || process.env.FIRESTORE_URL) + params.Collection);
      if (list && list.documents) {
        return {
          list: list.documents
        };
      }
    } catch (err) {
      return {
        list: []
      };
    }
  },
  computed: {
    ...mapState({
      collections: state => state.CollectionStore.collections
    }),

    collection() {
      if (this.collections.length > 0) return this.collections.find(item => item.name === this.$route.params.Collection);
      else return null;
    }
  },
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    toDate(date, format) {
      return dayjs(date).format(format);
    }
  },
  head() {
    return {
      title: "Hello Static Nuxt store"
    };
  }
};
</script>