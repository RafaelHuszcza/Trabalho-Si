import React from 'react';

import MenuFixed from '../../components/MenuFixed/index';
import ContactUs from '../../components/ContactUs/index';
import Footer from '../../components/Footer/index';

import './styles.css';

const Contact = () => {
    
  return (
    <div>
      <MenuFixed/>
        <ContactUs/>
      <Footer/>
    </div >
  );
};

export default Contact;