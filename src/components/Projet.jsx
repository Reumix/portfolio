import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function Projet(){

    let { id } = useParams();

    return (
        <div>
            <Header></Header>
            {
                <div>
                    <div>
                        <h2>{data.project[id-1].name}</h2>
                        <p>{data.project[id-1].desc}</p>
                        <img src={"/src/images/capture" + id + ".png"} height={500} width={500} alt={data.project[id-1].name}/>
                    </div>
                    <Link to={"/portfolio/creations"}><button>Retour à la liste</button></Link>
                </div>
            }
            <Footer></Footer>
        </div>
    )
}

export default Projet;