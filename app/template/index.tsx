"use client";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <Container>
      <Grid
        size={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          height: "80vh",
          alignItems: "center",
        }}
      >
        <Typography
          fontFamily={"var(--font-geist-mono)"}
          fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
        >
          This is the Assessment test for Funk Souq
        </Typography>
      </Grid>
    </Container>
  );
};

export default Index;
