import {Link} from "react-router-dom";

function Retour(){
    return(
        <>
            <Link to={'/'}><button>Retour</button></Link>
        </>
    )
}

export default Retour;