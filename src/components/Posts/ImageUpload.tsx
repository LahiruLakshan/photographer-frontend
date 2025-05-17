import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { AddAPhoto, Delete } from '@mui/icons-material';
import { ChangeEvent, useCallback } from 'react';

interface ImageUploadProps {
  files: File[];
  setFiles: (files: File[]) => void;
  maxFiles?: number;
}

const ImageUpload = ({ files, setFiles, maxFiles = 3 }: ImageUploadProps) => {
  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, maxFiles - files.length);
      setFiles([...files, ...newFiles]);
    }
  }, [files, maxFiles, setFiles]);

  const removeFile = useCallback((index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }, [files, setFiles]);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Upload Images (Max {maxFiles})
      </Typography>
      
      <Grid container spacing={2}>
        {files.map((file, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                position: 'relative',
                height: 200,
                border: '1px dashed #ccc',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <IconButton
                onClick={() => removeFile(index)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                  },
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        ))}
        
        {files.length < maxFiles && (
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="label"
              variant="outlined"
              fullWidth
              sx={{
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <AddAPhoto fontSize="large" />
              <Typography variant="body2">Add Image</Typography>
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ImageUpload;