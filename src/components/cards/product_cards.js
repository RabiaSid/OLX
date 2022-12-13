import { HeartOutlined } from '@ant-design/icons';
import React from 'react'
import { Post1, Post2 } from '../../assets/index'
import baseColors from '../../constants/colors';


 
function Product_cards() {

  const style = {
    card: {
        maxWidth: '350px',
        minWidth: '230px',
        height: '420px',
        minHeight: 'auto',
        margin: '',


        
        /*height: height && height,
        minHeight: "auto",
        width: width && width,
        minWidth: !width && '170px',
        color,
        fontWeight: fontWeight && fontWeight,
        borderRadius: borderRadius ? borderRadius : "5px",
        border: 'none',
        background: `${backgroundColor}`,
        padding: '0px 5px',
        textAlign: 'center',
        fontSize: '20px',
        cursor: 'pointer',*/
    },

    image_back: {
        maxWidth: '100%',
        minWidth:'auto',
        height: '55%',
        background: `${baseColors.darkColor}`,
    }, 

    image: {
      maxWidth: '80%',
      minWidth: 'auto',
      height: '100%',
      borderRadius:'none',

  },
  card_body: {
    minWidth: 'auto',
    color: baseColors.darkTextColor,
  }
}


return (
    
<div className="py-1 rounded m-0 p-0 d-flex justify-content-center align-items-center">
<div className="card" style={style.card}>
  <div className='text-center' style={style.image_back}>
  <img  style={style.image} src={ Post1 } class="card-img-top" alt="..."/>
  </div>
  <div className="card-body p-0 m-0 row" >
    <h6 className="card-title col-9 " style={style.card_body}>Suzuki Cultus VXRi 2008 </h6>
    <a className='col-3 fs-4'><HeartOutlined style={style.card_body}/></a>
    <h5 className="card-text col-12 " style={style.card_body}>Rs 735,000</h5>
    <p className="card-text col-12 m-0">99,000Km * 2008</p>
    <p className="card-text col-12">abul hassan isphani Road, karachi</p>
  </div>
</div>
</ div>

      
      /*
      <div>
      <Card
            hoverable
            style={styles.card}
            cover={
              <img  width='80%' height='80%' src={ Post1 }/>
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card> </div>
          */

  )
}

export default Product_cards