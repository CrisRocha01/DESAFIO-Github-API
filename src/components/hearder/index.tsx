import { Link } from "react-router-dom";
import "./hearder.css";

export default function Hearder() {
    return (
        <header className="hearder">
            <div className="container">
                <Link to={'/'} >GitHub API</Link>
            </div>
        </header>
    );
}
