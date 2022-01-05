import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const News = () => {
  const [textToAppear, setTextToAppear] = useState([{content:"",id:""}])
  const [collapsed, setCollapsed] = useState(false);
  
  const [news, setNews] = useState([
    
    {id : "1" , content: {type: "Governo Brasileiro",
    title: "TSE apresenta novo modelo de urna eletrônica para eleições de 2022:",
    text: "Além do modelo “UE2020” possuir um processador mais rápido, o terminal do mesário possui uma tela com comandos sensíveis ao toque. Essa funcionalidade em particular permitirá mais rapidez na identificação de eleitores, diminuindo o tempo de espera em filas. As informações são da Agência Brasil e do TSE.",
    image: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/49328_DFF8D5B1F27579CE.jpg",
    date:"14 de dezembro de 2021"}},

    {id : "2" , content: {type: "Governo Brasileiro",
    title: "Hackers do Ministério da Saúde afirmam que sites de notícias estariam “mentindo” sobre escopo do ataque:",
    text: "Além de ter conseguido mais acessos a sistemas na AWS do Governo, excluindo diversos backups, o grupo criminoso também teria obtido acesso ao outro banco de dados, excluindo máquinas virtuais e mais 100 TB de dados. O ataque, segundo os hackers, não teria sido apenas um “DNS Hijacking”. O Gabinete de Segurança Institucional divulgou uma nota na noite desta segunda-feira (13) confirmando novos ataques contra órgãos do Governo. O Ministério da Saúde, no entanto, afirma que o processo de recuperação dos registros de vacinas já foi finalizado, sem perda de dados. As informações são dos sites Convergência Digital e Agência Brasil.",
    image: "data:image/png;base64,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",
    date:"14 de dezembro de 2021"}},

    {id : "3" , content: {type: "Mundial",
    title: "Elon Musk é eleito “Pessoa do Ano” pela revista Time:",
    text: "Ao trabalhar em veículos elétricos, foguetes, implantes neurais e acumular a maior fortuna individual no mundo, nenhum outro indivíduo teria moldado narrativas tão distintas ao redor do planeta nos últimos doze meses como Musk, justifica a revista.",
    image: "https://exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg",
    date:"14 de dezembro de 2021"}},

    {id : "4" , content: {type: "Governo Brasileiro",
    title: "STF decide ISS como único imposto sobre licenciamento de softwares:",
    text: "A decisão estabelece que não deve haver distinção na tributação de softwares, sejam personalizados ou de prateleira, sem estarem mais sujeitos à cobrança do ICMS. A Associação Brasileira das Empresas de Software afirma que a decisão é positiva para o setor, dado que a alíquota do ISS varia de 2% a 5%, enquanto o ICMS pode chegar a 25%. As informações são do site Mobile Time.",
    image: "http://www.mpap.mp.br/images/CAOP-crim/2020/STF.jpg",
    date:"14 de dezembro de 2021"}},

    {id : "5" , content: {type: "Grandes Marcas",
    title: "Apple teria advertido operadoras de telefonia de que futuros modelos de iPhone não possuirão mais entrada para cartões SIM:",
    text: "Aparentemente os futuros modelos da marca só poderão ser ativados pela tecnologia eSIM, sem chip físico. As operadoras norte-americanas passariam a vender o iPhone 13 sem chip incluso já no segundo trimestre de 2022, como parte dessa transição. As informações são do site MacRumors.",
    image: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202102260728",
    date:"29 de dezembro de 2021 "}},
    
    {id : "6" , content: {type: "Espaço",
    title: "China notifica ONU após realizar manobras com estação espacial Tianhe e evitar colisão com satélites \"à deriva\" da Starlink:",
    text: "Em duas ocasiões distintas, os dispositivos estavam baixando suas altitudes como parte de manobras previstas em final de vida. A China solicitou ao secretário-geral da ONU que lembrasse a todos os países para “assumirem responsabilidades” por suas atividades no espaço sideral. As informações são do site SpaceNews.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    date:" 29 de dezembro de 2021 "}},

    {id : "7" , content: {type: "Startups",
    title: "Em 2021, onze startups brasileiras atingiram status de unicórnio:",
    text: "Ultrapassaram valor de mercado de 1 bilhão de dólares a MadeiraMadeira (venda de móveis e artigos para o lar), Hotmart (plataforma de venda de produtos digitais), Mercado Bitcoin (moedas digitais), Unico (reconhecimento facial e admissão digital), Nuvemshop (plataforma de e-commerce), Frete.com (plataforma de fretes), Cloudwalk (tecnologias de pagamento), Daki (delivery de mercado), Merama (comércio eletrônico), Olist (soluções para e-commerce) e Facily (plataforma de social commerce). As informações são do site Canaltech.",
    image: "https://i2.wp.com/www.startupbrasil.org.br/wp-content/uploads/2017/07/Logo-Start-Up-1.png?fit=523%2C268&ssl=1&is-pending-load=1",
    date:" 29 de dezembro de 2021 "}},

    {id : "8" , content: {type: "Grandes Startups",
    title: "Microsoft resolve problema parecido com o \"Bug do Milênio\" durante virada do ano:",
    text: "Servidores Exchange em todo o mundo suspenderam a entrega de emails, após a verificação da versão do mecanismo antivírus FIP-FS não passar ao tentar armazenar a data em uma variável int32 assinada. A variável podia armazenar apenas um valor máximo de 2.147.483.647, menor que o novo valor de 2.2010.001 para 1º de janeiro de 2022, à meia-noite. As informações são do site Bleeping Computer.",
    image: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F95465af9-a6d7-49a0-a118-cc099a0d10ba.jpg?fit=scale-down&source=next&width=700",
    date:" 3 de janeiro de 2022 "}},

    {id : "9" , content: {type: "Governo Brasileiro",
    title: "Receita Federal passa a emitir certidões apenas pela internet:",
    text: "As certidões negativas de débitos e positivas, com efeitos de negativa, deverão ser emitidas exclusivamente online. A medida passou a valer a partir do dia 1º de janeiro. As informações são da Agência Brasil.",
    image: "https://yt3.ggpht.com/sNvWIvGC9SAaCwSPM6imf_4OuTzp9BJ7LuYwlhEPahYxVbi_Xg0h-Kw2w0YQv8rIUJk_Fyql=s900-c-k-c0x00ffffff-no-rj",
    date:" 3 de janeiro de 2022 "}},

    {id : "10" , content: {type: "Mundial",
    title: "Cientistas israelenses desenvolvem nanocristais feitos de perovskita que se auto-reparam:",
    text: "O mineral tem chamado a atenção devido a características eletro-ópticas únicas e baixo custo de fabricação. O novo material pode ser incorporado futuramente em painéis solares e em telas de smartphones ou outros dispositivos eletrônicos. As informações são do site Phys.",
    image: "https://st.depositphotos.com/1610517/3425/i/600/depositphotos_34252629-stock-photo-israel-flag-blowing-in-the.jpg",
    date:" 4 de janeiro de 2022 "}},  
  
  ]);

  const toggleCollapsed = () => {
    let tableNews = document.querySelector(".tableNews");
    tableNews.classList.toggle("open");
    setCollapsed(!collapsed);
  };
  const history = useHistory();
  return (
    <div className="news">
      <div className="purpose">
        <h1>Missão do site de Notícias ( Bolar o texto)</h1>

      </div>
      <div class = "newsFeed">
        {news.map((props) => (       
 
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
                <td className = "newsMore"><p   >Clique para mais</p></td>  
                {/* onClick={()=>{toggleCollapsed()}}  */}
                {/* onClick={()=>{history.push(`/news/${props.id}`)}}  */}
                {/* onClick={()=>{
                      setTextToAppear([{content: props.content.text, id: props.id }])
                         }}         */}
                </tr>  
                <tr>
                <td className = "newsDate">{props.content.date}</td>                
                </tr>          
                </tbody>
            </table> 


          ))} 
           <div>
            { textToAppear[0].content != "" && (
            <p>{textToAppear[0].content}</p>
            
            )}

            </div>
          </div>        
    </div>
  );
};

export default News;
