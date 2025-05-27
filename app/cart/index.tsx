"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Container,
  Grid,
} from "@mui/material";
import useCartStore from "../zustandStore";
import ImageDiv from "../components/imageDiv";

const CartPage = () => {
  const { cart, removeFromCart, setQuantity } = useCartStore();
  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom>
          🛒 Your Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          cart.map((item, index) => (
            <Card
              key={`${item.id}-${index}`}
              sx={{
                display: "flex",
                mb: 2,
                alignItems: "center",
                gap: 2,
                p: 1,
              }}
            >
              <Grid container size={12}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ height: 200, width: "100%" }}>
                    <ImageDiv
                      src={item?.image}
                      alt={item?.title}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {item.price}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <TextField
                        type="number"
                        size="small"
                        label="Quantity"
                        fullWidth
                        value={item.quantity}
                        onChange={(e) =>
                          setQuantity(item.id, parseInt(e.target.value))
                        }
                        sx={{ width: "100%" }}
                      />
                      <Button
                        variant="outlined"
                        color="error"
                        sx={{ ml: 2 }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))
        )}

        {cart.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">
              Total Items:{" "}
              {cart.reduce((total, item) => total + (item.quantity ?? 0), 0)}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default CartPage;
