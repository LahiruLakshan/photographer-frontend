import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { loginWithGoogle } from '../../api/authService';

const GoogleLoginButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<GoogleIcon />}
      onClick={loginWithGoogle}
      sx={{
        backgroundColor: '#4285F4',
        '&:hover': { backgroundColor: '#357ABD' },
      }}
    >
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;