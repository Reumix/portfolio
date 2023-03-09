import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <h1>Bonjour,</h1>
            <div>
                <img src={"/src/images/pp.png"} alt={"photo de profil"} height={300}></img>
            </div>
            <p>Rendu : 24 mars</p>
            <Footer></Footer>
        </div>
    )
}

export default App