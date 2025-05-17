import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../../components/Auth/GoogleLoginButton';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: 3
      }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Share Your Photography Skills
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Join our community of photographers and enthusiasts
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <GoogleLoginButton />
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => navigate('/posts')}
          >
            Browse Posts
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;