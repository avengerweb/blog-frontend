<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
           <div class="container">
               <a class="navbar-brand" href="#">Avenger-Web</a>
               <button class="navbar-toggler"
                       @click.prevent="toggleHeader"
                       type="button"
                       aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" :class="{show: !isHeaderCollapsed}">
                   <ul class="navbar-nav ml-auto">
                       <li class="nav-item active">
                           <router-link class='nav-link' to="/">
                               Home
                           </router-link>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="#">Blog</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="#">Portfolio</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="#">About</a>
                       </li>
                   </ul>
               </div>
           </div>
        </nav>
        <nuxt/>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isHeaderCollapsed: true
      }
    },
    methods: {
      toggleHeader() {
        this.isHeaderCollapsed = !this.isHeaderCollapsed;
      }
    }
  }
</script>