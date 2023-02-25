import {useEffect} from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div class="header">
            <h3>Rémi Chabrerie</h3>
            <ul class="inline">
                <li><Link to={'/testvite'}>Accueil</Link></li>
                <li><Link to={`/creations`}>Créations</Link></li>
                <li><Link to={`/valeurs`}>Valeurs</Link></li>
                <li><Link to={`/contact`}>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Header;