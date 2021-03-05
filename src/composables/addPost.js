import axios from 'axios';
import { ref } from 'vue';

export default (post) => {
    const result = ref(null);
    const error = ref(null);

    const add = async () => {
        try {
            let {
                data
            } = await axios.post('http://localhost:3000/posts/',{
                title: post.title,
                body: post.body,
                tags: post.tags
            });
            result.value = data;

        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return { 
        result,
        error,
        add
    }
}