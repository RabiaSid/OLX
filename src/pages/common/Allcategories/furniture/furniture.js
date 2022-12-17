import React from 'react'
import { HeartOutlined } from '@ant-design/icons';
import baseColors from '../../../../constants/colors';
import { Post3 } from '../../../../assets';

const furniture = [
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
    key: 5,
  },
  {
    
    title: "James",
    amount: "2.00$",
    more: 'nkjhjk',
    area: "NK",
    text: "THE GOAT",
    key: 6,
  },
  {
    
    title: "James",
    amount: "2.00$",
    more: 'nkjhjk',
    area: "NK",
    text: "THE GOAT",
    key: 7,
  },
  {
    
    title: "James",
    amount: "2.00$",
    more: 'nkjhjk',
    area: "NK",
    text: "THE GOAT",
    key: 8,
  },
]

const style = {
  card: {
      maxWidth: '350px',
      minWidth: '230px',
      height: '420px',
      minHeight: 'auto',
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
  color: baseColors.darkColor,
}
}


function Furniture() {
  return (
    <div className="d-flex justify-content-center align-items-center container">
    <div className=' row '>
    <h1>Furniture</h1>
  
  {
    
furniture.map((item) => (

<div className=' col-sm-6 col-lg-4 col-xl-3 py-2' key={item.key}>
<div className="card" style={style.card}  >
  <div className='text-center' style={style.image_back}>
  <img  style={style.image} src={Post3} class="card-img-top" alt="..."/>
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

  )
}

export default Furniture