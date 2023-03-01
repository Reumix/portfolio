import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json"
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function Projet(){

    let { id } = useParams();

    return (
        <div>
            <Header></Header>
            {
                <div>
                    <h2>{data.project[id-1].name}</h2>
                    <p>{data.project[id-1].desc}</p>
                    <Link to={"/portfolio/creations"}>Retour à la liste</Link>
                </div>
            }
            <Footer></Footer>
        </div>
    )
}

export default Projet;