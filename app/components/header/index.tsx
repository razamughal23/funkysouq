"use client";
import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import NestedDropdown from "../nestedDropdown";
import useCartStore from "../../zustandStore";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);
  return (
    <Container sx={styles.MainContainer}>
      <Grid container size={12}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <NestedDropdown />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <span>🛒 Cart: {count}</span>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
