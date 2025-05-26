"use client";
import { Container, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../../components/card";
import { Women_Skirt_Data } from "../../../../static-data";

const Index = () => {
  return (
    <Container>
      <Grid container size={12} gap={1}>
        {Women_Skirt_Data?.map((item: any, index) => {
          return (
            <Grid size={{ xs: 12, md: 5.9 }} key={`${item.id}-${index}`}>
              <ProductCard
                slug={item.id}
                image={item?.img}
                title={item?.name}
                desc={item?.desc}
                price={item?.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Index;
