<template>
  <div class="home">
    <p>Home</p>
    <posts-list :posts="posts"></posts-list>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';
import PostsList from '../components/PostsList';
export default {
  name: 'Home',
  components: {
    PostsList,
  },
  setup() {
    const posts = ref([{
      title: 'Welcome to the blog',
      body: 'Lorem ipsum',
      id: 1
    }, {
      title: 'Top 5 CSS tips',
      body: 'Lorem ipsum',
      id: 2
    }]);

    return {
      posts,
    }
  }
}
</script>
