import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const Carosel = (props) => {
  console.log(props.files);
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel
        autoPlay="false"
        sx={{
          width: "100%",
          height: "80%",
        }}
      >
        {props.files.map((image, i) => {
          console.log(URL.createObjectURL(image));
          return (
            <div key={i} style={{ display: "flex", justifyContent: "center" }}>
              <div
                // src={URL.createObjectURL(image)}
                style={{
                  minWidth: "150px",
                  maxWidth: "340px",
                  height: "340px",
                  border: "1px solid black",
                  backgroundImage: `url(${URL.createObjectURL(image)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Carosel;