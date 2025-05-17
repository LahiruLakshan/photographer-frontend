// src/components/Posts/PostList.tsx
import { Box, CircularProgress, Typography } from '@mui/material';
import PostCard from './PostCard';

interface PostListProps {
  posts: Array<{
    id: number;
    title: string;
    description: string;
    authorUsername: string;
    authorProfilePicture: string;
    mediaUrls: string[];
    createdAt: string;
  }>;
  isLoading?: boolean;
}

const PostList = ({ posts, isLoading = false }: PostListProps) => {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (posts.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ my: 4 }}>
        No posts found. Be the first to create one!
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          authorUsername={post.authorUsername}
          authorProfilePicture={post.authorProfilePicture}
          mediaUrls={post.mediaUrls}
        />
      ))}
    </Box>
  );
};

export default PostList;