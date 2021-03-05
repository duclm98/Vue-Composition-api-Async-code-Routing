<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <single-post :post="post"></single-post>
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost';
export default {
    name: 'PostsList',
    components: {
        SinglePost,
    },
    props: ['posts'],
    setup(props) {
    },
}
</script>

<style>

</style>