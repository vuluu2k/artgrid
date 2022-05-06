import React from 'react'
import {Row,Col,Container} from 'react-bootstrap';
import FooterCarousel from '../carousel/FooterCarousel';
import {Link} from 'react-router-dom';
import './Style.css'
import Map from '../map/Map';

export default function Footer({products,image}) {
    return (
        <>
            <Container >
                <FooterCarousel image={image} />
            </Container>
            <Container fluid style={{backgroundColor: '#191919'}} className="text-white"> 
                <Container>
                    <Row style={{padding:'36px 0'}}>
                        <Col md={5}>
                            <div style={{width:'100%'}}>
                                <div style={{fontSize:'19.2px'}}>Thông tin liên hệ</div>
                                <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                                <p className='mt-12'>
                                    <strong> ARTGRID.IO HAUI</strong>
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/11.png" alt="" width="15" height="22"/>   Bắc Từ Liêm- Hà Nội
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/12.png" alt="" width="15" height="18"/>
                                    <a href="tel:0911519003" className="font-link"> 0911519003</a>
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/14.png" alt="" width="17" height="12"/>
                                    <span>
                                        <a href="mailto:thanh@gmail.com" className="font-link"> thanh@gmail.com</a>    
                                    </span>
                                    <br/>
                                    <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/15.png" alt="" width="17" height="21"/> <a href="https://artgrid.io/">https://artgrid.io/</a>
                                </p>
                                
         
                            </div>
                        </Col>
                        <Col md={2}>
                            <div style={{fontSize:'19.2px'}}>Mạng xã hội</div>
                            <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                            <p className='mt-12'>
                                    
                                    <a style={{color: 'white'}} href="https://www.facebook.com/Buithanh.2422"><i className="fab fa-facebook" style={{paddingRight: '10px'}}></i>FaceBook</a> 
                                    <br/>
                                    <br/>
                                    <a style={{color: 'white'}} href="https://www.linkedin.com/in/quang-v%C5%A9-l%C6%B0u-c%C3%B4ng-973305171/"><i className="fab fa-linkedin" style={{paddingRight: '10px'}}></i>LinkedIn</a> 
                                    <br/>
                                    <br/>
                                    <a style={{color: 'white'}} href="mailto:thanh@gmail.com"><i className="fas fa-envelope" style={{paddingRight: '10px'}}></i>Gmail</a> 
                                    <br/>
                                    <br/>
                                    <a style={{color: 'white'}} href="https://www.instagram.com/thanhhhh.2402/"><i className=" fab fa-instagram" style={{paddingRight: '10px'}}></i>Instagram</a> 
                                    <br/>
                                </p>
                        </Col >
                        
                        <Col md={5}>
                            <div>
                                <div style={{fontSize:'19.2px'}}>Bản đồ</div>
                                <div style={{borderBottom: '3px solid white',width:'40%',margin:'8px 0'}}></div>
                                <div className=".map-responsive">
                                    <Map height="30vh"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div style={{height:'40px',backgroundColor:'#0f1a55'}} className="d-flex justify-content-center align-items-center">
                <div className="font-weight-boler text-white">
                    Copyright &copy; Bùi Trọng Thanh - Imformation Technology Of HaUi
                </div>
            </div>
        </>
    )
}
