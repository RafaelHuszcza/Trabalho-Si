import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import NewsDoc from "../../Content/news.json"

const ContactUs = () => {

  const [news, setNews] = useState(NewsDoc);
  const [filteredNews, setFilteredNews] = useState(news);
  const history = useHistory();
  const filtersUsed = []
  const filterNews = (searchValue) =>{
    const newNews = news.filter((news)=>{   
      return news.content.type.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredNews(newNews)
  } 
  return (
    <div className="contact">
      <div className="contactContainer">
       
 
      </div>   
    </div>
  );
};

export default ContactUs;
