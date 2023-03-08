import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import { Link } from "react-router-dom";

function Creations(){
    return(
        <div>
            <Header></Header>
            <h1>Mes projets</h1>
            <div className={"project-list"}>
                {
                    data.project.map((project) => {
                        return (
                            <div key={project.id} className="project">
                                <h2>{project.name}</h2>
                                <div>
                                    <img src={"/src/images/capture" + project.id + ".png"} height={300} width={300} alt={project.name}></img>
                                    <Link to={`/portfolio/creations/projet/${project.id}`}><button>Voir le projet</button></Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Creations;