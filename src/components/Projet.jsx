import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import data_competences from "./data/competences.json"
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import competences from "./Competences.jsx";

function Projet(){

    let { id } = useParams();

    return (
        <>
            <Header></Header>
            {
                <div>
                    <div>
                        <h2>{data.project[0].jeux[id].name}</h2>
                        <p>{data.project[0].jeux[id].desc}</p>
                        <img src={"/src/images/capture" + id + ".png"} height={500} width={500} alt={data.project[0].jeux[id].name}/>
                        <div className={"content"}>
                            {
                                data.project[0].jeux[id].competences[0].langages.map((lang) => {
                                    return (
                                        <div className={"competences"}>
                                            <img src={data_competences.competences[0].langages[lang].image} height={150}></img>
                                            <p>{data_competences.competences[0].langages[lang].name}</p>
                                        </div>
                                    )
                                })
                            }
                            {
                                data.project[0].jeux[id].competences[0].logiciels.map((logi) => {
                                    return (
                                        <div className={"competences"}>
                                            <img src={data_competences.competences[0].logiciels[logi].image} height={150}></img>
                                            <p>{data_competences.competences[0].logiciels[logi].name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Link to={"/portfolio/creations"}><button>Retour à la liste</button></Link>
                </div>
            }
            <Footer></Footer>
        </>
    )
}

export default Projet;