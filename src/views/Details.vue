<template>
  <h1>Details</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Spinner from '../components/Spinner.vue';
import getPost from '../composables/getPost';
export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    const route = useRoute();
    // const { post, error, load } = getPost(props.id);
    const { post, error, load } = getPost(route.params.id);

    load();

    return {
      post,
      error,
    }
  }
}
</script>

<style>

</style>