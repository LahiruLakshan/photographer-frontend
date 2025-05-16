import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/profile")}
        >
          Profile
        </Button>
      </Box>
      <Typography variant="h2" gutterBottom>
        Welcome to SkillShare Photography
      </Typography>
      <Typography variant="h6" gutterBottom>
        Explore and share amazing photographs from talented individuals.
      </Typography>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/create-post")}
        >
          Create Post
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={() => navigate("/posts")}
        >
          Explore Posts
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
