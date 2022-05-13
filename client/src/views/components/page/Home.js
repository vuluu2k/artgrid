import React from "react";
import ControlledCarousel from "../../../components/carousel/ControlledCarousel";
import PleaseBuyACar from "../content/home/PleaseBuyACar";

export default function Home({ products, image }) {
  return (
    <>
      <ControlledCarousel image={image} />
      <div className="TitleCar d-flex">
        <div
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "19px",
            margin: "auto",
            fontWeight: "bold",
          }}
        >
          <hr
            style={{
              borderBottom: "4px solid",
              width: "75%",
              color: "rgb(255, 11, 11)",
            }}
          />
        </div>
      </div>
      <PleaseBuyACar products={products} />
    </>
  );
}
