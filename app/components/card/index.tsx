import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import ImageDiv from "../imageDiv";
import { styles } from "./styles";
import useCartStore from "../../zustandStore";
interface props {
  id?: any;
  image: any;
  title: any;
  desc: any;
  price: any;
  slug: any;
}
const ProductCard = ({ image, title, desc, price, slug, id }: props) => {
  const { removeFromCart } = useCartStore();
  const product = {
    id,
    title,
    price,
    desc,
    image,
    slug,
  };
  console.log("Product", slug);

  const addToCart = useCartStore((state) => state.addToCart);
  const handleAdd = () => {
    const product = {
      id: slug.toString(),
      title: title,
      desc,
      price: parseFloat(price.replace("$", "")),
      image: image,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    };
    addToCart(product);
  };
  return (
    <Card>
      <Box sx={{ height: 300, width: "100%" }}>
        <ImageDiv src={image} alt={title} style={{ objectFit: "contain" }} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          // onClick={() => addToCart(product)}
          onClick={handleAdd}
          sx={{ ...styles.button, background: "skyblue" }}
        >
          Add to Cart
        </Button>
        <Link href={`/product-details/${slug}`}>
          <Button
            size="small"
            sx={{ ...styles.button, background: "lightgrey" }}
          >
            Product Detail Page
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
