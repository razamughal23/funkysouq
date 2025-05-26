"use client";
import { Container, Grid } from "@mui/material";
import React from "react";
import { Men_Pent_Data } from "../../../../static-data";
import ProductCard from "../../../components/card";

const Index = () => {
  return (
    <Container>
      <Grid container size={12} gap={1}>
        {Men_Pent_Data?.map((item: any, index) => {
          return (
            <Grid size={{ xs: 12, md: 5.9 }} key={`${item.id}-${index}`}>
              <ProductCard
                slug={item.name}
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
