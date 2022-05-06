import React from 'react'
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
export default function LineCard({product}) {
    return (
        <Card to={`/products/${product.slug}`} as={Link} style={{ width: '100%',marginTop: '5px'}}>
            <Card.Img variant="top" src={product.imgCarUrl} />
         
        </Card>
    )
}
