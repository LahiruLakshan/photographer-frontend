import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import theme from './theme';
import LandingPage from './pages/Home/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import ProfilePage from './pages/User/ProfilePage';
import ViewPostsPage from './pages/Posts/ViewPostsPage';
import CreatePostPage from './pages/Posts/CreatePostPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AppBar from './components/Common/AppBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <AppBar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={
                  <ProfilePage />
              } />
              <Route path="/posts" element={
                  <ViewPostsPage />
              } />
              <Route path="/posts/create" element={
                  <CreatePostPage />
              } />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;