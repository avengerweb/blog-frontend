<template>
    <section v-if="post" class="container post-detail shadow-sm py-2 bg-white">
        <small class="post-detail__category text-muted text-uppercase d-block">News / Date: {{ post.created_at }}</small>
        <h1>{{ pageName }}</h1>
        <div v-html="post.content"></div>
    </section>
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