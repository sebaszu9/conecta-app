import banner from '../../assets/banner.png';
import register from '../../assets/Registrar.png';
import votar from '../../assets/Votar.png';
import noticias from '../../assets/Noticias.png';

import '../home/homeStyles.css';

function Home() {
  return (
    <>
      <div className="home">
        <img src={banner} />
        <div className='servicios'>
          <h1>Elige el servicio</h1>
          <a href='registrarse'>
            <img src={register} />
          </a>

          <a href='votar'>
            <img src={votar} />
          </a>

          <a href='noticias' style={{marginLeft:'2%'}}>
            <img src={noticias} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;