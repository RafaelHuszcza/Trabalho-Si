import React from 'react';

import MenuFixed from '../../components/MenuFixed/index';
import Purpose from '../../components/Purpose/index';
import News from '../../components/News/index';
import Footer from '../../components/Footer/index';

import './styles.css';

const Feed = () => {
    
  return (
    <div>
      <MenuFixed/>
        <Purpose/>
        <News/>
      <Footer/>
    </div >
  );
};

export default Feed;