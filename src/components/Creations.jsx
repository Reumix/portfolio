import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import Retour from "./Retour.jsx";
import {Link} from "react-router-dom";

function Creations(){

    return(
        <div>
            <Header></Header>
            <h1>Créations</h1>
            {
                data.project.map((project) => {
                    return (
                        <div key={project.id} class="project">
                            <h2>{project.name}</h2>
                            <div>
                                <div>
                                    <img src={"./src/assets/capture" + project.id + ".png"} height={400} width={400}></img>
                                </div>
                                <div className={"project-description"}>
                                    <p className="inline">{project.desc}</p>
                                    <button><Link to={`/creations/${project.id}`}>Voir le projet</Link></button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            <Footer></Footer>
        </div>
    )
}

export default Creations;