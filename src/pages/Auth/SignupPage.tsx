import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../../components/Auth/GoogleLoginButton';
import { useAuth } from '../../context/AuthContext';

const SignupPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already logged in
  if (user) {
    navigate('/profile');
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Join SkillShare Photography
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Create an account to share your work with the community
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleLoginButton />
          </Box>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Typography variant="body2" align="center">
            Already have an account?{' '}
            <Typography
              component="span"
              color="primary"
              sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => navigate('/login')}
            >
              Sign in
            </Typography>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignupPage;