import React from "react";
import Image, { ImageProps } from "next/image";
import { Box } from "@mui/material";

interface props extends ImageProps {
  zIndex?: number;
}
const ImageDiv = (props: props) => {
  return (
    <Box style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        fill
        {...props}
        src={props.src}
        style={{
          ...props.style,
        }}
        priority
        placeholder="blur"
        blurDataURL="/images/loaderShim.png"
      />
    </Box>
  );
};

export default ImageDiv;
