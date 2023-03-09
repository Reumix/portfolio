import {useState, useEffect} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/project.json";
import data_competences from "./data/competences.json"
import {Link, parsePath} from "react-router-dom";
import {useParams} from "react-router-dom";

function CheckPrevious(id, type) {
    if (parseInt(id) === 0){
        return(
            <p><button disabled={true}>Projet précédent</button></p>
        )
    } else {
        if (type === "jeux"){
            return(
                <Link to={`/portfolio/creations/jeux/${parseInt(id)-1}`}><button disabled={false}>Projet précédent</button></Link>
            )
        } else if (type === "web"){
            return(
                <Link to={`/portfolio/creations/web/${parseInt(id)-1}`}><button disabled={false}>Projet précédent</button></Link>
            )
        }
    }
}

function CheckNext(id, type){

    let totalPages = undefined;

    if (type === "jeux"){
        totalPages = data.project[0].jeux.length-1;

        if (parseInt(id) !== totalPages){
            return(
                    <Link to={`/portfolio/creations/jeux/${parseInt(id)+1}`}><button disabled={false}>Projet suivant</button></Link>
            )
        }

    } else if (type === "web") {
        totalPages = data.project[0].web.length-1;

        if (parseInt(id) !== totalPages){
            return(
                <Link to={`/portfolio/creations/web/${parseInt(id)+1}`}><button disabled={false}>Projet suivant</button></Link>
            )
        }
    }

    if (parseInt(id) === totalPages) {
        return(
            <p><button disabled={true}>Projet suivant</button></p>
        )
    }
}

function Projet(){

    const array = () => {
        useEffect(() => {

            if (type === "jeux"){ return data.project[0].jeux; }
            else if (type === "web"){ return data.project[0].web; }
        },[]);
    }

    //const [array, setArray] = useState(null);
    let { id } = useParams();
    const path = window.location.pathname;
    const type = path.split('/')[3];



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
                    <div className={"project-nav"}>
                        { CheckPrevious(id, type) }
                        <Link to={"/portfolio/creations"}><button>Retour à la liste</button></Link>
                        { CheckNext(id, type) }
                    </div>
                </div>
            }
            <Footer></Footer>
        </>
    )
}

export default Projet;