<template>
  <section class="container">
    <div class="jumbotron mt-4">
      <h1 class="display-4 text-center">AvengerWeb</h1>
      <p class="lead text-center">My name is Vadim, you are welcome to my small own world. I`m a developer, not only at web ;)</p>
    </div>

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
