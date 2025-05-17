import apiClient from './apiClient';

export const getCurrentUser = () => apiClient.get('/photography/me');
export const loginWithGoogle = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google';
};
export const logout = () => apiClient.post('/logout');