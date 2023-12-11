import register from '../../assets/registrarse.png';

import '../home/homeStyles.css';

function Register() {
  return (
    <>
      <div className="home">
        <img src={register} />
        <div className='servicios'>
          <h1>ConectApp</h1>
          
        </div>
      </div>
    </>
  );
}

export default Register;