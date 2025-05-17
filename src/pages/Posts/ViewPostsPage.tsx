import { Box, Typography, Button } from '@mui/material';
import { useQuery } from 'react-query';
import { getAllPosts } from '../../api/postService';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/Common/LoadingSpinner';
import PostList from '../../components/Posts/PostList';

const ViewPostsPage = () => {
  const { data: posts, isLoading } = useQuery('posts', getAllPosts);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4
      }}>
        <Typography variant="h4">All Posts</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/posts/create')}
        >
          Create Post
        </Button>
      </Box>
      <PostList posts={posts || []} />
    </Box>
  );
};

export default ViewPostsPage;