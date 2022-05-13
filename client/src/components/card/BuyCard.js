import React,{useContext} from 'react'
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Style.css';
import {CartContext} from '../../contexts/CartContext';

export default function BuyCard({product}) {
    const {addToCart,setShowCart} = useContext(CartContext);
    const formatToCurrency=amount=>{
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const handeBuy=()=>{
        addToCart(product._id)
        setShowCart(true)
    }
    return (
        <Card style={{ marginTop:"5px", width: '100%'}}>
            <Link to={`/products/${product.slug}`} className="ani_buy_car"  >
                <Card.Img variant="top" style={{width: '100%'}} src={product.imgCarUrl} />
            </Link>
            
        </Card>
    )
}
