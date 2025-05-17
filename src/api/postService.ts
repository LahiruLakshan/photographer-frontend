import apiClient from './apiClient';

export const getAllPosts = () => apiClient.get('/photography/posts');
export const createPost = (postData: FormData) => 
  apiClient.post('/photography/posts', postData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const updatePost = (id: number, postData: any) => 
  apiClient.put(`/photography/posts/${id}`, postData);
export const deletePost = (id: number) => 
  apiClient.delete(`/photography/posts/${id}`);