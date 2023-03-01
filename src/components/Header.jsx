import {useEffect} from "react";
import {Link} from "react-router-dom";
import data from "./data/project.json"

function Header(){
    return(
        <div className={"header"}>
            <h3>Rémi Chabrerie</h3>
            <ul className={"inline"}>
                <li><Link to={'/portfolio'}>Accueil</Link></li>
                {/*<li><Link to={`/portfolio/creations`}>Créations</Link></li>*/}
                <li>
                    <div className={"dropdown"}>
                        <Link to={""} className={"dropbtn"}>Créations</Link>
                        <div className={"dropdown-content"}>
                            <Link to={`/portfolio/creations`}>Tout les projets</Link>
                            {
                                data.project.map((project) => {
                                    return (
                                        <Link to={`/portfolio/creations/projet/${project.id}`}>{project.name}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </li>
                <li><Link to={`/portfolio/valeurs`}>Valeurs</Link></li>
                <li><Link to={`/portfolio/contact`}>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Header;