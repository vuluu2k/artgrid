import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PleaseBuyACar from "../content/home/PleaseBuyACar";
import { useContext, useState } from "react";
import PaginationCus from "../../../components/pagination/PaginationCus";
import { ProductContext } from "../../../contexts/ProductContext";

export default function Products() {
  const {
    productState: { products },
  } = useContext(ProductContext);
  const productcategory = products.filter(
    (item) => item.category === "graphics"
  );
  return (
    <div style={{ padding: "36px 0" }}>
      <h1 style={{ color: "black" }}></h1>
      <PleaseBuyACar products={productcategory} />
    </div>
  );
}
