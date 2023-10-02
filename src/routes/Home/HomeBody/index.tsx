import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./HomeBody.css"

export default function HomeBody() {
    return (
        <main className="container home-body">
            <h1>Desafio Github API</h1>
            <p>DevSuperior - Escola de programação</p>
            <Link to={'/form'}>
                <Button name='Encontrar'/>

            </Link>
        </main>
    );
}
