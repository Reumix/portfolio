import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/competences.json"

function Competences() {
    return (
        <>
            <Header></Header>
            <h1 className={"titre-inline"}>Mes compétences</h1>
            <div className={"competences-general"}>
                {
                    data.competences.map((type) => {
                        return (
                            <div>
                                <h2>Langages</h2>
                                <div className={"content"}>
                                    {
                                        type.langages.map((competence) => {
                                            return (
                                                <div className={"competences"}>
                                                    <img src={competence.image} height={150} alt={competence.name}></img>
                                                    <h3>{competence.name}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <h2>Logiciels</h2>
                                <div className={"content"}>
                                    {
                                        type.logiciels.map((competence) => {
                                            return (
                                                <div className={"competences"}>
                                                    <img src={competence.image} height={150} alt={competence.name}></img>
                                                    <h3>{competence.name}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </>
    )
}

export default Competences;