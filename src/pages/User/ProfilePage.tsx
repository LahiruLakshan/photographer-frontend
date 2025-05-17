import { Box, Typography, Avatar, Button, CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import { getCurrentUser } from '../../api/authService';
import PostList from '../../components/Posts/PostList';

interface UserProfile {
  id: number;
  username: string;
  email: string;
  profilePictureUrl: string;
  posts: Array<{
    id: number;
    title: string;
    description: string;
    authorUsername: string;
    authorProfilePicture: string;
    mediaUrls: string[];
    createdAt: string;
  }>;
}

const ProfilePage = () => {
  const { data: user, isLoading } = useQuery('currentUser', getCurrentUser, {
    select: (response) => {
      // Transform the API response to match our UserProfile interface
      return {
        id: response.data.id,
        username: response.data.username || 'Unknown',
        email: response.data.email || '',
        profilePictureUrl: response.data.profilePictureUrl || '',
        posts: response.data.posts?.map((post: any) => ({
          id: post.id,
          title: post.title,
          description: post.description,
          authorUsername: post.user?.username || 'Unknown',
          authorProfilePicture: post.user?.profilePictureUrl || '',
          mediaUrls: post.media?.map((m: any) => m.mediaUrl) || [],
          createdAt: post.createdAt
        })) || []
      } as UserProfile;
    }
  });

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