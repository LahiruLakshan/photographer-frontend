import { AppBar as MuiAppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AppBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            SkillShare Photography
          </Button>
        </Typography>
        
        {user ? (
          <>
            <Button color="inherit" onClick={() => navigate('/posts')}>
              Posts
            </Button>
            <Button color="inherit" onClick={() => navigate('/profile')}>
              <Avatar 
                src={user.profilePictureUrl} 
                sx={{ width: 24, height: 24, mr: 1 }} 
              />
              Profile
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;