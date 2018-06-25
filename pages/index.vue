<template>
  <section class="container">
    <div class="post" v-for="post in posts" :key="post.id">
      {{ post.title }}
      <router-link :to="{name: 'posts-slug', params: { slug: post.slug }}">
        More
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pagination: {
        page: 1
      }
    };
  },
  computed: {
    posts() {
      return this.page ? this.page.data : [];
    },
    page() {
      return this.$store.state.Posts.pages.find(p => p.current_page === this.pagination.page);
    }
  },
  async fetch({ store }) {
    return store.dispatch('Posts/loadPosts');
  },
}
</script>
