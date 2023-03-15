import fetch from './fetch';

export default {
  async getPostList() {
    return fetch(() => {
      console.log('fetchPostsList be called!');
    });
  }
};
