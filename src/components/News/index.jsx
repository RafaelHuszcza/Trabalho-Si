import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import NewsDoc from "../../contentNews/news.json"



const News = () => {

  const [news, setNews] = useState(NewsDoc);
  const [filteredNews, setFilteredNews] = useState(news);
  const [filterType, setFilterType] = useState('text')
  const [currentFilter, setCurrentFilter] = useState('Sem Filtro');
  const history = useHistory();
  const filtersUsed = []
  const [filterSearch, setFilterSearch] = useState("");
  const [filterButton, setFilterButton] = useState("");
  

  function filterNews (){
    let newNews = news.filter((news)=>{   
      return (news.content.type.toLowerCase().includes(filterButton.toLowerCase())) && news.content[filterType].toLowerCase().includes(filterSearch.toLowerCase())
    })

    setFilteredNews(newNews)
  } 

  function handleFilterClick(props, filter) {
    if (props != null) { 
      setFilterButton(props.content.type)
    }
    else {
      setFilterButton("")
    }
    setCurrentFilter(filter)
  }
  useEffect(() => {filterNews()}, [filterSearch, filterButton]);

  return (
    <div className="news">
      <div className="newsContainer">
      <div class = "newsFeed">
        {filteredNews.map((props) => (          
              <table className = "newsTable" key={props.id}>                
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
      <div className="newsFilterAndSearch">
      <div class = "newsFilter">
      <p className="selectFilter">Selecione o Filtro Desejado:</p>

    <button className={currentFilter === 'Sem Filtro' ? 'filterButton selected' : 'filterButton'} onClick={()=> handleFilterClick(null, "Sem Filtro")} >Sem Filtro</button>
    {news.map((props) => (      
      filtersUsed.includes(props.content.type) ? "":filtersUsed.push(props.content.type)?    
      <button className={currentFilter === props.content.type ? 'filterButton selected' : 'filterButton'} onClick={()=> handleFilterClick(props, props.content.type)}>{props.content.type}</button>
      :""
    
    ))}
      </div>     
      <div class = "newsSearch">
      <input id="search"  onChange={(e) => setFilterSearch(e.target.value)} type="text" placeholder="Digite a pesquisa"/>
            <div className="customSelect" style={{ width: '100%'}}>
            
          <select name="filterType" defaultValue="text" onChange={(e)=>{setFilterType(e.target.value)}}>
            <option value="text">Filtrar por Texto</option>
            <option value="title">Filtrar por Título</option>            
          </select>
          </div>
          </div>


      </div>   
      </div>     
    </div>
  );
};

export default News;
