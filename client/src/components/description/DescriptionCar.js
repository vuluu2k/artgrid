import React from 'react'
import {Table} from 'react-bootstrap';
import parse from 'html-react-parser';

export default function DescriptionCar({product}) {
    return (
        <div className="container">
            {product.descriptionCar&&
              <div style={{backgroundColor:"rgba(0,0,0,0)",color:"#fff"}}>
                    <h4 style={{padding:'10px 0'}}>Mô tả chung</h4>
                   <h5 style={{backgroundColor:"rgba(0,0,0,0)",color:"#fff"}}>{parse(product.descriptionCar)}</h5> 
                   </div>
            }
            <div>
                <h4 style={{padding:'10px 0'}}>Thông tin</h4>
                <Table striped bordered hover size="sm" style={{color:'white'}}>
                    <thead style={{color:'white'}}>
                        <tr>
                            <th width="50%">Thuộc tính</th>
                            <th>Chỉ số</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Tên Sản Phẩm</th>
                            <td>{product.nameCar}</td>
                        </tr>
                        <tr>
                            <th>Người tạo</th>
                            <td>{product.engineCar}</td>
                        </tr>
                        <tr>
                            <th>Loại tương thích</th>
                            <td>{product.TypeCar}</td>
                        </tr>
                        <tr>
                            <th>Link xem thêm</th>
                            <td>{product.madeInCar}</td>
                        </tr>
                        <tr>
                            <th>File Size</th>
                            <td>{product.sizeCar}</td>
                        </tr>
                       
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
