import { useState } from 'react';
import { Box, Typography, Button, TextField, Paper } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from '../../api/postService';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../../components/Posts/ImageUpload';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      navigate('/posts');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post', JSON.stringify({ title, description }));
    files.forEach(file => formData.append('files', file));
    mutation.mutate(formData);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <ImageUpload files={files} setFiles={setFiles} />
        
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            type="submit" 
            variant="contained" 
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Posting...' : 'Create Post'}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CreatePostPage;