import React from 'react'
import NavBar from '../navbar/NavBar';
import {Container, FormControl, Button} from 'react-bootstrap'
import './Style.css';
import {useContext,useEffect,useState} from 'react';
import {ProductContext} from '../../contexts/ProductContext';

export default function Header({products}) {
    const {
        getProduct
    }=useContext(ProductContext);



    return (
        <>
            <div className="topBar">
                <div className="d-flex justify-content-between align-items-center w-100" style={{padding:'0 16px'}}>
                    <div className="SubTitle">ARTGRI.IO </div>
                    <div className="IconClass">
                        <div className="d-flex justify-content-between align-items-center">
                            <a className="icon_link" href="https://www.facebook.com/Buithanh.2422"><i className="fab fa-facebook"></i></a>
                            <a className="icon_link" href="mailto:thanh@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a className="icon_link" href="https://www.linkedin.com/in/quang-v%C5%A9-l%C6%B0u-c%C3%B4ng-973305171/"><i className="fab fa-linkedin"></i></a>
                            <a className="icon_link" href="https://www.instagram.com/thanhhhh.2402/"><i className=" fab fa-instagram"></i></a>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Container className="d-flex justify-content-center align-items-center centerBar w-100">
                    
                    <div className="gps-bar" style={{display: 'flex',width:'80%',position:'fixed',zIndex:9}}> 
                        <FormControl
                            type="text"
                            placeholder="Nhập tên sản phẩm muốn tìm trên ArtGrid"
                            style={{ width: "100%",height: "40px",marginLeft: "30px", }}
                            className="mr-sm-2"
                            size="sm"
                            onChange={e=>getProduct(e.target.value)}
                            />
                            <Button style={{ width: "50px",height: "40px" }} className="font-custom" size="sm">
                            <i className="fas fa-search"></i>
                            </Button>
                    </div>
                   
                </Container>
            </div>
            
        </>            
    )
}
