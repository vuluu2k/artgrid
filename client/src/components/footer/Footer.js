import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FooterCarousel from "../carousel/FooterCarousel";
import { Link } from "react-router-dom";
import "./Style.css";
import Map from "../map/Map";

export default function Footer({ products, image }) {
  return (
    <>
      <div
        style={{
          height: "40px",
          backgroundColor: "#0f1a55",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="font-weight-boler text-white">
          Copyright &copy; Bùi Trọng Thanh - Imformation Technology Of HaUi
        </div>
      </div>
    </>
  );
}
