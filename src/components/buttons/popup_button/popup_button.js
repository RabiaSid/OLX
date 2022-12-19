import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseColors from '../../../constants/colors';
import {  FacebookFilled, GoogleCircleFilled  , MailFilled, PhoneFilled  } from '@ant-design/icons';

const Style = {
    
    btn:{
    color: baseColors.secondaryColor,
    fontSize:'1.4rem',
    textAlign: 'center',
    margin: '0',
    padding:'0',
    background:'none',
    border:'none'
    },
    img:{
        
        width: '250px',
        height: '220px'
    },
    box:{
        color: baseColors.secondaryColor,
        fontSize:'1.4rem',
        border: '3px solid ',
        borderColor: baseColors.secondaryColor,
        margin: '10px',
        paddingLeft: '10px',
        paddingRight: '10px'
        
    }
    
  };

function Popup_button() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button  onClick={handleShow} style={Style.btn}>
        Log in
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <div type="flex" justify="center" align="center">
                <img src='logo.svg' style={Style.img} />
                <h4>WELCOME TO OLX</h4>
                <p>The trusted community of buyers and sellers.</p>
            </div>
            <div style={Style.box} className="row">
            <a ><FacebookFilled /> hellow</a>
            </div>
            <div style={Style.box} className="row">
            <a ><GoogleCircleFilled />  hellow</a>
            </div>
            <div style={Style.box} className="row">
            <a ><MailFilled /> hellow</a>
            </div>
            <div style={Style.box} className="row">
            <a ><PhoneFilled />   hellow</a>
            </div>
          {/*<Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
  </Form>*/}
        </Modal.Body>
        
          {/*<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
</Button>*/}
        
      </Modal>
    </>
  )
}

export default Popup_button