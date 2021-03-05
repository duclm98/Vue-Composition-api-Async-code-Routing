<template>
  <div class="tag">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
          <posts-list :posts="postsWithTag"></posts-list>
          <tag-cloud :posts="posts"></tag-cloud>
      </div>
      <div v-else>
          <spinner />
      </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList';
import TagCloud from '../components/TagCloud';
import Spinner from '../components/Spinner';
import getPosts from '../composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
export default {
    components: {
        Spinner,
        PostsList,
        TagCloud,
    },
    setup() {
        const route = useRoute();
        const { posts, error, load } = getPosts();

        load();

        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag));
        })

        return {
            error, posts, postsWithTag
        }
    }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>