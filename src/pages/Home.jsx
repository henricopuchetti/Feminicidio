import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Rodape from "../components/Rodape";
import Dadosimg from "../assets/Dados.png";
import Dados2img from "../assets/cores de pele mais afetadas.png";




function Home() {
  return (
    <div className="home">
        <NavProjeto />
        <Carrossel />
        <br />
        <h1 className="titulo">Mais sobre o feminicídio</h1>
        <br />
        <img className="img1" src={Dadosimg} alt="" />
        <h3 className="txt1">Segundo estudos à medida que os anos se passaram, as estatísticas têm mostrado um crescimento gradual do feminicídio, do ano de 2015 até 2022 os números de mortes por conta do feminícidio só aumentou, exceto no ano de 2020, muitos falam que nesse ano os números diminuiram pelo fato da pandemia, porém ainda não tem nenhum estudo que comprova essa informação. Mas infelizmente os números de mortes já voltaram a subir nos anos seguintes.
        </h3>
        <br />
        <img className="img1" src={Dados2img} alt="" />
        <br />
        <h3>Agora mostraremos a vocês as três delegacias com maiores números de mortes registradas em São Paulo, em primeiro lugar está a 047 DP - Capão Redondo com um total de 15 resgistros, logo após vem a 003 DP - Campinas com 12 registros e por fim temos a 025 DP - Parelheiros com 11 registros. </h3>
        <Rodape />

        
    </div>
  )
      
}


export default Home
