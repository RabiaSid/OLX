import React from 'react'
import { BackTop } from 'antd';
import baseColors from '../../../constants/colors';
import '../../../../src/App.css'
import { UpOutlined  } from '@ant-design/icons';


const style = {
  btn:{
    background: baseColors.white,
    color:baseColors.secondaryTextColor,
    width:'200px',
    height:'50px',
    borderRadius: '5rem',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
  }
}

function BackToTopButton() {
  return (
    <>
    <div>
    <BackTop style={style.btn}>
      <div className="ant-back-top-inner text-center  fs-6 py-1" > <UpOutlined /> Back To Top</div>
    </BackTop>
  </div>
  </>
  );
}

export default BackToTopButton


