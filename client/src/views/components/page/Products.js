import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PleaseBuyACar from '../content/home/PleaseBuyACar';
import { useContext, useState } from "react";
import PaginationCus from '../../../components/pagination/PaginationCus';
import { ProductContext } from "../../../contexts/ProductContext";

export default function Products() {
    const {
        productState: { products },
    } = useContext(ProductContext);
    const productcategory = products.filter(item => item.category === 'graphics')
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    // Get Current Products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productcategory.slice(indexOfFirstProduct, indexOfLastProduct);
    // ChangePage
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
    return (
        <Container style={{ padding: "36px 0" }}>
            <Container style={{ padding: '36px 0' }}>
                <h1 style={{color:'black'}}></h1>
                <PleaseBuyACar products={productcategory} />
            </Container>

            <div className="d-flex justify-content-center pt-5" >
                <PaginationCus
                    productsPerPage={productsPerPage}
                    totalProducts={productcategory.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>

        </Container>

    );
}
