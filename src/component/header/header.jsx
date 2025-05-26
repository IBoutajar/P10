import "../header/header.css"
import Logo from '../../assets/argentBankLogo.png'
import User from "../../assets/user.svg";

import { Link } from 'react-router-dom';




const Header = () => {


    return (
        <div className="headerWrapper">
            {/* Lien vers la page d'accueil avec le logo */}
            <Link to="/">
                <img src={Logo} alt="Argent Bank logo" className="logo"/>
            </Link>

            {/* Liens de connexion/déconnexion basés sur l'état du token */}
            <div className= "authentication-links ">
                 <div className="sign">
                        <img className="userIcon" src={User} alt="User icon" />
                        <Link to="/signIn">Sign In</Link>
                    </div>
                
            </div>
        </div>
    )
}
  

export default Header
               