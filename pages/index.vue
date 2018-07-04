<template>
  <section class="container">
    <div class="jumbotron mt-4">
      <h1 class="display-4 text-center">AvengerWeb</h1>
      <p class="lead text-center">My name is Vadim, you are welcome to my small own world. I`m a developer, not only at web ;)</p>
    </div>

    <div class="latest-news">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6" v-for="post in posts" :key="post.id">
          <div class="card">
            <div class="card-img-top">
              <router-link :to="{name: 'posts-slug', params: { slug: post.slug }}" class="d-block">
                <img class="img-fluid" src='http://via.placeholder.com/680X420' alt="Card image cap">
              </router-link>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <router-link :to="{name: 'posts-slug', params: { slug: post.slug }}" class="btn-link">
                  {{ post.title }}
                </router-link>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Category</h6>
            </div>
          </div>
        </div>
      </div>
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
