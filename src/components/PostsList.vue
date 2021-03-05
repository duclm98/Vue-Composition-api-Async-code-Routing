<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <single-post :post="post"></single-post>
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost';
export default {
    name: 'PostsList',
    components: {
        SinglePost,
    },
    props: ['posts'],
    setup(props) {
        onMounted(() => {
            console.log('Component monuted');
        });
        onUnmounted(() => {
            console.log('Component unmounted');
        });
        onUpdated(() => {
            console.log('Component updated');
        })
    },
}
</script>

<style>

</style>