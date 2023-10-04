import request from '../api';
import { Post } from '../models/models';
const fetchPost = async() => {
    console.log("test message")
    await delay();
    const result = await request({
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    });
    return result as Post[];
}
const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 5000));
}
export default fetchPost;