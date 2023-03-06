import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import { Link } from "react-router-dom";

function Creations(){
    return(
        <div>
            <Header></Header>
            <h1>Créations</h1>
            {
                data.project.map((project) => {
                    return (
                        <div key={project.id} className="project">
                            <h2>{project.name}</h2>
                            <div>
                                <div>
                                    <img src={"./src/images/capture" + project.id + ".png"} height={400} width={400} alt={"Image " + project.id}></img>
                                </div>
                                <div className={"project-description"}>
                                    <p className="inline">{project.desc}</p>
                                    <button><Link to={`/portfolio/creations/projet/${project.id}`}>Voir le projet</Link></button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            {/*{
                projects.length > 0 && projects.map((project) => {
                    return (
                        <div key={project.id} className="project">
                            <h2>{project.name}</h2>
                            <div>
                                <div>
                                    <img src={"src/images/capture" + project.id + ".png"} height={400} width={400}></img>
                                </div>
                                <div className={"project-description"}>
                                    <p className="inline">{project.desc}</p>
                                    <button><Link to={`/portfolio/creations/${project.id}`}>Voir le projet</Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }*/}
            <Footer></Footer>
        </div>
    )
}

export default Creations;