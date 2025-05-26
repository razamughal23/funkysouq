"use client";
import { Container, Grid, Link } from "@mui/material";
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
      <Grid
        container
        size={11}
        sx={{ margin: "auto", display: "flex", alignItems: "center" }}
      >
        <Grid size={{ xs: 6, sm: 6 }}>
          <NestedDropdown />
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <span>🛒 Cart: {count}</span>
          <Link href="/cart" sx={{ marginLeft: "10px" }}>
            <span>Open Cart</span>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
