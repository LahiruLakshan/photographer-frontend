import { Card, CardMedia, CardContent, Typography, CardActions, Button, Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface PostCardProps {
  id: number;
  title: string;
  description: string;
  authorUsername: string;
  authorProfilePicture: string;
  mediaUrls: string[];
}

const PostCard = ({ 
  id, 
  title, 
  description, 
  authorUsername,
  authorProfilePicture,
  mediaUrls 
}: PostCardProps) => {
  return (
    <Card sx={{ mb: 3 }}>
      {mediaUrls.length > 0 && (
        <CardMedia
          component="img"
          height="300"
          image={mediaUrls[0]}
          alt={title}
        />
      )}
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={authorProfilePicture} sx={{ mr: 2 }} />
          <Typography variant="subtitle1">{authorUsername}</Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/posts/${id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;