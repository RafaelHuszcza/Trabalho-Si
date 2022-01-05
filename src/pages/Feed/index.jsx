import React from 'react';

import MenuFixed from '../../components/MenuFixed/index';
import News from '../../components/News/index';
import Footer from '../../components/Footer/index';

import './styles.css';

const Feed = () => {
    
  return (
    <div>
      <MenuFixed/>
        <News/>
      <Footer/>
    </div >
  );
};

export default Feed;