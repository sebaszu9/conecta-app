import { useState } from 'react';
import votacion from '../../assets/sistema_votacion.png';
import proyecto1 from '../../assets/1.png';
import proyecto2 from '../../assets/2.png';
import proyecto3 from '../../assets/3.png';
import document from '../../assets/document.png';

import '../votacion/votacionStyles.css';

function Votacion() {

  const [ opcion1, setOpcion1 ] = useState(null);
  const [ opcion2, setOpcion2 ] = useState(null);
  const [ show, setShow  ] = useState(false);

  return (
    <>
      <div className="home">
        <img src={votacion} />
        <div className='servicios'>
            <div className='proyectos'>

              <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <div href='' onClick={()=>setShow(!show)}>
                    <img src={proyecto1} />
                </div>

                <div href='' style={{marginLeft:'2%'}}>
                    <img src={proyecto2} />
                </div>

                <div href='' style={{marginLeft:'2%'}}>
                    <img src={proyecto3} />
                </div>
              </div>


                {
                  show&&<>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>

                  <div style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#cfbbfc', margin: 20, borderRadius:10, paddingLeft:20, paddingRight:20}}>

                    <img src={document} style={{height:50, width:50}} />

                    <h1> Proyecto de encerramiento </h1>
                  </div>
                </div>


                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>


                <div style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'white', margin: 20, borderRadius:10, paddingLeft:20, paddingRight:20}}>
  
                  <p style={{fontSize:30}}> ¿Se encuentra de acuerdo con el proyecto de encerramiento? </p>

                  <div style={{width:20}} />

                  <span style={{padding:10, backgroundColor:'gray', fontSize:27, fontWeight: 'bold', borderRadius: 8, width: 80}}>
                    Si 
                  </span>

                  <div style={{width:20}} />

                  <span style={{padding:10, backgroundColor:'gray', fontSize:27, fontWeight: 'bold', borderRadius: 8, width: 80}}>
                    No 
                  </span>

                </div>


                <div style={{display:'flex', alignItems:'row', alignItems:'center', backgroundColor:'white', margin: 20, borderRadius:10, paddingLeft:20, paddingRight:20}}>
  
                  <p style={{fontSize:30}}> ¿Esta dispuesto a pagar una cuota extraordinaria para este proyecto? </p>

                  <div style={{width:20}} />

                  <span style={{padding:10, backgroundColor:'gray', fontSize:27, fontWeight: 'bold', borderRadius: 8, width: 80}}>
                    Si 
                  </span>

                  <div style={{width:20}} />

                  <span style={{padding:10, backgroundColor:'gray', fontSize:27, fontWeight: 'bold', borderRadius: 8, width: 80}}>
                    No 
                  </span>

                </div>


                </div>
                  </>
                }

                
                  
 

            

            </div>
        </div>
      </div>
    </>
  );
}

export default Votacion;