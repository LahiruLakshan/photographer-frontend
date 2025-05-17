import { Box, Typography, Avatar, Button, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import { getCurrentUser } from '../../api/authService';
import PostList from '../../components/Posts/PostList';

const ProfilePage = () => {
  const { data: user, isLoading } = useQuery('currentUser', getCurrentUser);

  if (isLoading) return <CircularProgress />;

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 3,
        mb: 4 
      }}>
        <Avatar
          src={user?.profilePictureUrl}
          sx={{ width: 100, height: 100 }}
        />
        <Box>
          <Typography variant="h4">{user?.username}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {user?.email}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="contained">Edit Profile</Button>
          </Box>
        </Box>
      </Box>
      
      <Typography variant="h5" sx={{ mb: 2 }}>My Posts</Typography>
      <PostList posts={user?.posts || []} />
    </Box>
  );
};

export default ProfilePage;