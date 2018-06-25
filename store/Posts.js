export const state = () => ({
  posts: [], // Store single loaded posts
  pages: [] // Store for loaded pages
});

export const mutations = {
  POSTS_ADD(state, post) {
    state.posts.push(post);
  },
  PAGES_ADD(state, page) {
    state.pages.push(page)
  }
};

export const actions = {
  async loadPosts({ commit }, options)
  {
    options = Object.assign({page: 1}, options || {});

    let response = await this.$axios.$get(`/api/v1/blog/posts/?page=${options.page}`);
    commit('PAGES_ADD', response)
  },
  async loadPostBySlug({ commit, state }, slug)
  {
    let post = state.posts.find(p => p.slug === slug);

    // Post already loaded
    if (post) {
      return;
    }

    // Try to find post in loaded pages
    state.pages.find(page => {
      post = page.data.find(p => p.slug === slug);
    });

    // Finally load post using API
    if (!post) {
      post = await this.$axios.$get(`/api/v1/blog/posts/slug/${slug}`);
    }

    commit('POSTS_ADD', post)
  }
};