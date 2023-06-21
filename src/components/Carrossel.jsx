import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="imagem1"
          src="https://images.pexels.com/photos/6003521/pexels-photo-6003521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          width={1500} alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='h1-carrossel'>Feminicídio</h1>
          <p className='txt-carrossel'>Ser mulher é estar em risco</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;