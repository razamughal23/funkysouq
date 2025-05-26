"use client";
import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { All_Products } from "../../static-data/data";
import ImageDiv from "../components/imageDiv";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = All_Products.find((item) => item.id?.toString() === id);

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Container>
      <Card>
        <Box sx={{ height: 300, width: "100%" }}>
          <ImageDiv
            src={product.img}
            alt={product.name}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.desc}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;
