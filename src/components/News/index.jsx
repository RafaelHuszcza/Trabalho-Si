import React, { useState } from "react";

import "./styles.css";

const News = () => {
  const [news, setNews] = useState([
    
    {id : "2" , content: {title: "Finanças", text: "sub1", image: "Icon", color: "black"}},
    {id : "3" , content: {title: "Finanças", text: "sub1", image: "icon",color: "blue"}},
    {id : "4" , content: {title: "Finanças", text: "sub1", image: "icon", color: "red"}},  
    {id : "5" , content: {title: "Finanças", text: "sub1", image: "icon", color: "red"}}, 
    {id : "6" , content: {title: "Finanças", text: "sub1", image: "icon", color: "red"}},  
    {id : "7" , content: {title: "Finanças", text: "sub1", image: "icon", color: "red"}},  
    {id : "8" , content: {title: "Finanças", text: "sub1", image: "icon", color: "red"}},  
  ]);
  
  return (
    <div className="news">
      <div className="purpose">
        <h1>Missão do site de Notícias ( Bolar o texto)</h1>

      </div>
    
        {news.map((props) => (
          <div class = 'tabela'>
              <table id = "tabela" className="tabela" style= {{backgroundColor: props.content.color }}key={props.id}>
                <p>{props.content.title}</p>
                <p>{props.content.text}</p>
                <p>{props.content.image}</p>

            </table>
             </div>
          ))}         
    </div>
  );
};

export default News;
