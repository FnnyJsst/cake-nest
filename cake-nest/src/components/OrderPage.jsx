import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function OrderPage(props) {
    const {username} = useParams();

    return (
        <div>
            <NavBar /> 
            <h1>Bonjour {username}</h1>
            <Link to={"/"}>
                <button>Déconnexion</button>
            </Link>
        </div>
    );
}