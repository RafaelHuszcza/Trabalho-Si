import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import NewsDoc from "./news.json"

const News = () => {


  
  const [news, setNews] = useState( NewsDoc);
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
    <div className="news">
      <div className="newsContainer">
      <div class = "newsFeed">
        {filteredNews.map((props) => (
          
              <table className = "tableNews" key={props.id}>                
                <tbody>
                <tr>
                    <td className= "newsImage" rowSpan="5" ><img  src={props.content.image} alt = "Imagem Noticia"></img></td>
                    <td className= "newsType">{props.content.type}</td>
                </tr>                
                <tr>
                <td className= "newsTitle">{props.content.title}</td>             
                </tr> 
                <tr>
                <td className= "newsText">{props.content.text}</td>             
                </tr>  
                <tr>
                <td className = "newsMore"><p onClick={()=>{history.push("/login")}}  >Clique para mais</p></td>
                </tr>  
                <tr>
                <td className = "newsDate">{props.content.date}</td>                
                </tr>          
                </tbody>
            </table> 


          ))} 
           
      </div>  
      <div class = "newsFilter">
      <p className="selectFilter">Selecione o Filtro Desejado:</p>
    <button className="filterButton" onClick={()=> filterNews("")} >Sem Filtro</button>
    {news.map((props) => (      
      filtersUsed.includes(props.content.type) ? "":filtersUsed.push(props.content.type)?    
      <button className="filterButton" onClick={()=> filterNews(props.content.type)}>{props.content.type}</button>
      :""
    
    ))}
      </div>      
      </div>     
    </div>
    
    

  );
};

export default News;
