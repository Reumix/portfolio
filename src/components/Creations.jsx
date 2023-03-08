import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import { Link } from "react-router-dom";

function Creations(){
    return(
        <>
            <Header></Header>
            <h1 className={"titre-inline"}>Mes projets</h1>
            <div className={"content"}>
                {
                    data.project[0].jeux.map((project) => {
                        return (
                            <div key={project.id} className="project">
                                <h2>{project.name}</h2>
                                <div>
                                    <img src={"/src/images/capture" + project.id + ".png"} height={300} width={300} alt={project.name}></img><br/>
                                    <Link to={`/portfolio/creations/projet/${project.id}`}><button>Voir le projet</button></Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Footer></Footer>
        </>
    )
}

export default Creations;