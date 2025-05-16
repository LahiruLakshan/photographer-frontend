import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
} from '@mui/material';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  });

  const [userPosts, setUserPosts] = useState([]);

  const fetchUserPosts = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/posts');
      const data = await res.json();

      // Optional: Filter posts based on user.email if backend supports it
      const filtered = data.filter(
        (post) => post.authorEmail === user.email
      );

      setUserPosts(filtered);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Box textAlign="center">
        <Avatar
          src={user.avatarUrl}
          alt={user.name}
          sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {user.email}
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        My Posts
      </Typography>

      {userPosts.length === 0 ? (
        <Typography>No posts uploaded yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {userPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card>
                {post.imageUrl && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.imageUrl}
                    alt={post.title}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
