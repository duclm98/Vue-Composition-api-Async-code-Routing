<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <posts-list :posts="posts"></posts-list>
      <tag-cloud :posts="posts"></tag-cloud>
    </div>
    <div v-else>
      <spinner />
    </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList';
import Spinner from '../components/Spinner';
import TagCloud from '../components/TagCloud';
import getPosts from '../composables/getPosts';
export default {
  name: 'Home',
  components: {
    PostsList,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return {
      posts,
      error
    }
  }
}
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>