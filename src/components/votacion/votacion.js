import votacion from '../../assets/sistema_votacion.png';
import proyecto1 from '../../assets/1.png';
import proyecto2 from '../../assets/2.png';
import proyecto3 from '../../assets/3.png';

import '../votacion/votacionStyles.css';

function Votacion() {
  return (
    <>
      <div className="home">
        <img src={votacion} />
        <div className='servicios'>
            <div className='proyectos'>
                <a href=''>
                    <img src={proyecto1} />
                </a>

                <a href='' style={{marginLeft:'2%'}}>
                    <img src={proyecto2} />
                </a>

                <a href='' style={{marginLeft:'2%'}}>
                    <img src={proyecto3} />
                </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Votacion;