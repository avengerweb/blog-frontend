<template>
    <div v-if="post">
        <h1>{{ pageName }}</h1>
        <div v-html="post.content"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    pageName() {
      return this.post ? this.post.title : 'Not found';
    },
    post() {
      return this.$store.state.Posts.posts.find(p => p.slug === this.$route.params.slug)
    }
  },
  async fetch({ store, route }) {
    return store.dispatch('Posts/loadPostBySlug', route.params.slug);
  },
  head() {
    return {
      title: this.pageName
    }
  }
}
</script>