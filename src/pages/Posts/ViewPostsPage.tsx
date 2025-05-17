import { Box, Typography, Button } from '@mui/material';
import { useQuery } from 'react-query';
import { getAllPosts } from '../../api/postService';
import PostList from '../../components/Posts/PostList';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

interface Post {
  id: number;
  title: string;
  description: string;
  authorUsername: string;
  authorProfilePicture: string;
  mediaUrls: string[];
  createdAt: string;
}

const ViewPostsPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery('posts', getAllPosts, {
    select: (response) => {
      // Transform the API response to match our Post interface
      return response.data.map((post: any) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        authorUsername: post.user?.username || 'Unknown',
        authorProfilePicture: post.user?.profilePictureUrl || '',
        mediaUrls: post.media?.map((m: any) => m.mediaUrl) || [],
        createdAt: post.createdAt
      })) as Post[];
    }
  });

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
      <PostList posts={data || []} />
    </Box>
  );
};

export default ViewPostsPage;