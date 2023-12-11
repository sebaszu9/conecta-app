import logo from '../../assets/Logo.png';
import '../navbar/navbarStyles.css';

function Navbar(){
    return(
        <>
        <nav>
            <a>
                <img src={logo} />
            </a>

            <div>
                <ul id='navbar'>
                    <li>
                        <a href=''>
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;