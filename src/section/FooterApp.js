import React from 'react'
import { useNavigate } from 'react-router'
import baseColors from '../constants/colors'
import { Google_icon1, Google_icon2, Google_icon3 } from '../assets/index'

const style={
    footer:{
        width:"100%",
        height:"auto",
        background: baseColors.lightGrey

    },
    heading:{
        fontSize: '1.4rem',
        color: baseColors.darkTextColor

    },
    list:{
        textDecoration: 'none',
	    listStyleType: 'none',
	    paddingLeft: '0rem',
        fontSize: '1rem',
        color: baseColors.primaryTextColor,
    },
    footerBottom:{
        width:"100%",
        height:"auto",
        background: baseColors.secondaryColor,
        color: baseColors.white
    }

}

function FooterApp() {

    const navigate = useNavigate()


  return (
    <>
    <footer className="container-fluid" style={style.footer} >
    <div className="row  container-fluid text-left pt-5 ">
            <div className="col-12 col-md-6 col-lg-2 text-left">
            <h4 style={style.heading}>Popular Categories</h4>
                <div>
                <ul style={style.list}>
                <li onClick={() => navigate('/mobile')}><span>Mobile</span></li>
                <li onClick={() => navigate('/electronic')}><span>Electronic</span></li>
                <li onClick={() => navigate('/property')}><span>Property</span></li></ul></div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-left">
            <h4 style={style.heading}>Trending Search</h4>
                <div>
                <ul style={style.list}>
                <li onClick={() => navigate('/cars')}><span>Car</span></li>
                <li onClick={() => navigate('/services')}><span>Services</span></li>
                <li onClick={() => navigate('/furnitue')}><span>Furniture</span></li></ul></div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-left">
            <h4 onClick={() => navigate('/about') } style={style.heading}> About US</h4>
                <div>
                <ul style={style.list}>
                <li><a href='https://www.empg.com/'>About EMPG</a></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li></ul></div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 text-left">
            <h4 onClick={() => navigate('/') }  style={style.heading}> Olx</h4>
                <div>
                <ul style={style.list}><li><span>Email</span></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li>
                <li><span>Email</span></li></ul></div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 text-left">
            <span onClick={() => navigate('')} style={style.heading}><div className='row'>
        <div className='col-12'>
        <h3 style={style.heading}>Follow US</h3>
        </div>
        <div className='col-12 col-sm-4'>
        <img src={Google_icon1} />
        </div>
        <div className='col-12 col-sm-4'>
        <img src={Google_icon2} />
        </div>
        <div className='col-12 col-sm-4'>
        <img src={Google_icon3} />
        </div>
        </div></span>
            </div>
            <div className='col-12 text-end' style={style.footerBottom}>
                <span>abc</span>
                <span>abc</span>
            </div>
    </div>
    </footer>
    </>
  )
}

export default FooterApp