"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import useCartStore from "../zustandStore";

const CartPage = () => {
  const { cart, removeFromCart, setQuantity } = useCartStore();

  return (
    <Box sx={{ p: 4 }}>
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
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ width: 100, height: 100, objectFit: "contain" }}
            />
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
                  value={item.quantity}
                  onChange={(e) =>
                    setQuantity(item.id, parseInt(e.target.value))
                  }
                  sx={{ width: 100 }}
                  inputProps={{ min: 1 }}
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
          </Card>
        ))
      )}

      {cart.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">
            Total Items:{" "}
            {cart.reduce((total, item) => total + (item.quantity ?? 0), 0)}
          </Typography>
          <Typography variant="h6">
            Total Price: $
            {cart
              .reduce(
                (total, item) => total + item.price * (item.quantity ?? 1),
                0
              )
              .toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
