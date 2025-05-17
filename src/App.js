import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AppBar from './components/Common/AppBar';
import { AuthProvider } from './context/AuthContext';
import theme from './theme';
import LandingPage from './pages/Home/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import ProfilePage from './pages/User/ProfilePage';
import ViewPostsPage from './pages/Posts/ViewPostsPage';
import CreatePostPage from './pages/Posts/CreatePostPage';

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
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/posts" element={
                <ProtectedRoute>
                  <ViewPostsPage />
                </ProtectedRoute>
              } />
              <Route path="/posts/create" element={
                <ProtectedRoute>
                  <CreatePostPage />
                </ProtectedRoute>
              } />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;