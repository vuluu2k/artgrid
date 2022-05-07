import React from 'react'

export default function InforContact({css}) {
    return (
        <p style={{fontWeight:'bolder'}}>
            <strong>ARTGRI.IO HAUI</strong>
            <br/>
            <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/11.png" alt="" width="15" height="22"/> Bắc Từ Liêm- Hà Nội
            <br/>
            <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/12.png" alt="" width="15" height="18"/>
            <span style={{color:'white'}}><a href="tel:0911519003" className={css}> 0911519003</a></span>
            <br/>
            <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/14.png" alt="" width="17" height="12"/>
            <span style={{color:'white'}}>
                <a href="mailto:thanh@gmail.com" className={css}> thanh@gmail.com</a>    
            </span>
            <br/>
            <img src="http://hyundaimotorvn.com/wp-content/uploads/2019/04/15.png" alt="" width="17" height="21"/> https://artgrid.io/
        </p>
    )
}
