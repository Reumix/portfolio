import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data/competences.json"

function Competences() {
    return (
        <div>
            <Header></Header>
            <h1>Mes compétences</h1>
            <div className={"competences-general"}>
                {
                    data.competences.map((type) => {
                        return (
                            <>
                                <h2>Langages</h2>
                                <div className={"competences-types"}>
                                    {
                                        type.langages.map((competence) => {
                                            return (
                                                <div className={"competences"}>
                                                    <img src={competence.image} height={200}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <h2>Logiciels</h2>
                                <div className={"competences-types"}>
                                    {
                                        type.logiciels.map((competence) => {
                                            return (
                                                <div className={"competences"}>
                                                    <img src={competence.image} height={200}></img>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Competences;