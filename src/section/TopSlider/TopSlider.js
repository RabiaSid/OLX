import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  maxHeight: '45vh',
  minHeight: 'auto',
  width: '100%'
};


function TopSlider() {
  return (
    <div className='py-2'>

<Carousel autoplay>
    <div>
      <img src='https://images.olx.com.pk/thumbnails/310378076-800x600.webp' style={contentStyle}/>
      
    </div>
    <div>
    <img src='https://images.olx.com.pk/thumbnails/309851602-800x600.webp' style={contentStyle}/>
    </div>
  </Carousel>

      {/*<div style={{
      display: 'block', width: '90%' 
    }}>
      <h4>ReactJS Ant-Design Carousel Component</h4>
      <>
        <Carousel>
          <div>
            <h3 style={{ backgroundColor: 'red', 
                         height: 100 }}>Item 1</h3>
          </div>
          <div>
            <h3 style={{ backgroundColor: 'blue',
                         height: 100 }}>Item 2</h3>
          </div>
          <div>
            <h3 style={{ backgroundColor: 'yellow', 
                         height: 100 }}>Item 3</h3>
          </div>
        </Carousel>
      </>
  </div>*/}
      
  </div>
  )
}

export default TopSlider