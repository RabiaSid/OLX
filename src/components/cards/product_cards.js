import { HeartOutlined } from '@ant-design/icons';
import React from 'react'
import { Post1, Post2 } from '../../assets/index'
import baseColors from '../../constants/colors';
import { Card } from "react-bootstrap";


 
function Product_cards() {
 
  const cardInfo = [
    {
      
      title: "Lebron",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 1,
    },
    {
      
      title: " James",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 2,
    },
    {
      
      title: "Lebron",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 3,
    },
    {
      
      title: "James",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 4,
    },
    {
      
      title: "James",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 4,
    },
    {
      
      title: "James",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 4,
    },
    {
      
      title: "James",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 4,
    },
    {
      
      title: "James",
      amount: "2.00$",
      more: 'nkjhjk',
      area: "NK",
      text: "THE GOAT",
      key: 4,
    },
  ]

  const style = {
    card: {
        maxWidth: '350px',
        minWidth: '230px',
        height: '420px',
        minHeight: 'auto',
        margin: '',
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
    
<div className="d-flex justify-content-center align-items-center container">
<div className=' row'>
  
  {
    
cardInfo.map((item) => (
<div className=' col-sm-6 col-lg-4 col-xl-3 ' key={item.key}>
<div className="card" style={style.card}  >
  <div className='text-center' style={style.image_back}>
  <img  style={style.image} src={Post1} class="card-img-top" alt="..."/>
  </div>
  <div className="card-body p-0 m-0 row" >
    <h6 className="card-title col-9 " style={style.card_body}>{item.title}</h6>
    <a className='col-3 fs-4'><HeartOutlined style={style.card_body}/></a>
    <h5 className="card-text col-12 " style={style.card_body}>{item.amount}</h5>
    <p className="card-text col-12 m-0">{item.more}</p>
    <p className="card-text col-12">{item.area}</p>
  </div>
</div>
</div>
))

}
</div>
</ div>

  );


}
export default Product_cards