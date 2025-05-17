import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = ({ size = 40 }: { size?: number }) => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="200px"
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default LoadingSpinner;