import axios from 'axios';

export default async function fetchPostsList(callback: (...args: any) => any) {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    return callback(res.data);
  });
}
