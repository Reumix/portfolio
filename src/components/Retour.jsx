import {Link} from "react-router-dom";

function Retour(){
    return(
        <div>
            <Link to={'/'}><button>Retour</button></Link>
        </div>
    )
}

export default Retour;