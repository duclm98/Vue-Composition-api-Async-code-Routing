import axios from 'axios';
import { ref } from 'vue';

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            // Simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            });
            
            let {
                data
            } = await axios.get('http://localhost:3000/posts');
            posts.value = data;

        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { 
        posts,
        error,
        load
    }
}

export default getPosts;