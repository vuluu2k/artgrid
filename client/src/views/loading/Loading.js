import React from "react";
import Home from "../components/page/Home";
import Introduce from "../components/page/Introduce";
import Products from "../components/page/Products";
import News from "../components/page/News";
import NewDetail from "../components/page/NewDetail";
import Installment from "../components/page/Installment";
import PriceList from "../components/page/PriceList";
import Contact from "../components/page/Contact";
import Cart from "../components/page/Cart";
import Pay from "../components/page/Pay";
import Confirm from "../components/page/Confirm";
import ProductDetail from "../components/page/ProductDetail";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import QuoteModal from "../../components/modal/QuoteModal";
import CartModal from "../../components/modal/CartModal";
import ToastQuote from "../../components/toast/ToastQuote";
import ButtonModal from "./ButtonModal";
import { ProductContext } from "../../contexts/ProductContext";
import { SilderContext } from "../../contexts/SilderContext";
import { NewContext } from "../../contexts/NewContext";
import { CartContext } from "../../contexts/CartContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ConfirmModal from "../../components/modal/ConfirmModal";
import { Nav, FormControl, Button, Row } from "react-bootstrap";
import "./Style.css";
import { Link } from "react-router-dom";

export default function Loading({ PageRoute }) {
  const {
    productState: { products, productsLoading },
    getProduct,
  } = useContext(ProductContext);
  const {
    productState: { graphics },
    getProductWithCategory,
  } = useContext(ProductContext);
  const {
    newState: { news },
    getNew,
  } = useContext(NewContext);

  const {
    showConfirmDeleteProudctInCart: { show, productId },
    setShowConfirmDeleteProudctInCart,
  } = useContext(ConfirmContext);
  const { deleteCart } = useContext(CartContext);
  const {
    silderState: { image },
    getImage,
  } = useContext(SilderContext);
  // console.log(useContext(ProductContext))
  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getProduct();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getProductWithCategory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getNew();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news]);

  const handleClickDelete = () => {
    deleteCart(productId);
    handleClose();
  };
  const handleClose = () =>
    setShowConfirmDeleteProudctInCart({
      show: false,
      productId: "",
    });
  let body;
  if (productsLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  body = (
    <>
      {PageRoute === "home" && (
        <Home products={products} graphics={graphics} image={image} />
      )}
      {PageRoute === "introduce" && <Introduce />}
      {PageRoute === "products" && <Products />}
      {PageRoute === "news" && <News />}
      {PageRoute === "newDetail" && <NewDetail news={news} />}
      {PageRoute === "installment" && <Installment />}
      {PageRoute === "pricelist" && <PriceList />}
      {PageRoute === "contact" && <Contact />}
      {PageRoute === "cart" && <Cart />}
      {PageRoute === "pay" && <Pay />}
      {PageRoute === "confirm" && <Confirm />}
      {PageRoute === "productDetail" && (
        <ProductDetail products={products} productsLoading={productsLoading} />
      )}
    </>
  );
  return (
    <>
      <div style={{ marginLeft: "250px" }}>
        <Header products={products} />{" "}
      </div>

      <div className=" d-flex">
        <div
          style={{
            marginTop: "-137px",
            width: "250px",
            height: "100vh",
            position: "fixed",
            zIndex: "99999",
            backgroundColor: "#000",
          }}
        >
          <Row
            to="/home"
            as={Link}
            style={{
              width: "250px",
              marginTop: "20px",
              borderBottom: "1px solid #fff",
            }}
          >
            <Nav.Link
              to="/home"
              as={Link}
              style={{ color: "#fff", marginLeft: "20px" }}
              className="font-custom"
              active
            >
              <i class="fas fa-home"> </i> Trang chủ
            </Nav.Link>
          </Row>

          <Row
            to="/introduce"
            as={Link}
            style={{
              width: "250px",
              marginTop: "20px",
              borderBottom: "1px solid #fff",
            }}
          >
            <Nav.Link
              to="/introduce"
              as={Link}
              style={{ color: "#fff", marginLeft: "20px" }}
              className="font-custom"
            >
              <i class="fas fa-book"></i> Giới thiệu
            </Nav.Link>
          </Row>
          {/* <Row style={{ width: "250px" , marginTop: "20px",borderBottom: "1px solid #fff" }}>
            <NavDropdown
              style={{ color: "#fff ",marginLeft: "20px" }}
              title="Chân dung"
              id="basic-nav-dropdown"
              className="font-custom text_white "
            >
                
              {products.map((product) => (
                <div key={product._id}>
                  <NavDropdown.Item style={{color:"#000"}} to={`/products/${product.slug}`} as={Link}>
                    {product.nameCar}
                  </NavDropdown.Item>
                </div>
              ))}
            </NavDropdown>
          </Row> */}
          <Row
            to="/products"
            as={Link}
            style={{
              width: "250px",
              marginTop: "20px",
              borderBottom: "1px solid #fff",
            }}
          >
            <Nav.Link
              to="/products"
              as={Link}
              style={{ color: "#fff ", marginLeft: "20px" }}
              className="font-custom"
            >
              <i class="fas fa-image"></i> Chân dung
            </Nav.Link>
          </Row>
          <Row
            to="/scenery"
            as={Link}
            style={{
              width: "250px",
              marginTop: "20px",
              borderBottom: "1px solid #fff",
            }}
          >
            <Nav.Link
              to="/scenery"
              as={Link}
              style={{ color: "#fff ", marginLeft: "20px" }}
              className="font-custom"
            >
              <i class="fas fa-image"></i> Phong cảnh
            </Nav.Link>
          </Row>
          <Row
            to="/contact"
            as={Link}
            style={{
              width: "250px",
              marginTop: "20px",
              borderBottom: "1px solid #fff",
            }}
          >
            <Nav.Link
              to="/contact"
              as={Link}
              style={{ color: "#fff ", marginLeft: "20px" }}
              className="font-custom"
            >
              <i class="fas fa-phone"></i> Liên hệ
            </Nav.Link>
          </Row>
          {/* <Row style={{ width: "250px", marginTop: "20px" }}>
            <FormControl
              type="text"
              placeholder="Tìm kiếm..."
              style={{ width: "160px", marginLeft: "30px" }}
              className="mr-sm-2"
              size="sm"
            />
            <Button variant="outline-success" className="font-custom" size="sm">
              <i className="fas fa-search"></i>
            </Button>
          </Row> */}
        </div>
      </div>
      <div style={{ marginLeft: "250px", marginTop: "20px" }}>
        {body}
        <Footer products={products} image={image} />
      </div>
      <ToastQuote />
      <QuoteModal />
      <CartModal />
      <ButtonModal />
      <ConfirmModal
        title="Xác nhận"
        content="Bạn muốn bỏ sản phẩm này ra khỏi giỏ hàng"
        show={show}
        onClick={handleClickDelete}
        onClose={handleClose}
      />
    </>
  );
}
