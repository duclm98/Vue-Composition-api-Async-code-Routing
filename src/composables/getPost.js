import axios from 'axios';
import { ref } from 'vue';

export default (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            // Simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            });

            let {
                data
            } = await axios.get('http://localhost:3000/posts/' + id);
            post.value = data;

        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { 
        post,
        error,
        load
    }
}