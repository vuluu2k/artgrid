import React from 'react'
import {Row,Col} from 'react-bootstrap';
import BuyCard from '../../../../components/card/BuyCard';
export default function PleaseBuyACar({products}) {
    return (<>
        <h4 style={{textAlign:'center', borderBottom:'2px solid white',paddingBottom:12}}>DANH SÁCH SẢN PHẨM</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 mx-auto mt-3">
            {products.map(product=>(
                <Col style={{padding:'0 5px'}} key={product._id}>
                    <BuyCard 
                        product={product}
                    />
                </Col>
            ))}
        </Row>
    </>
    )
}
