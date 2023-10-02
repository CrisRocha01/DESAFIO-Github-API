import { Outlet } from "react-router-dom";
import Button from "../../../components/Button";
import "./Form.css";
import findUser from "../../../services/userGit-service";
import { useState } from "react";
import { Link } from "react-router-dom";




export default function Form() {
    const [userGit, setUserGit] = useState('');

    function handleSearchInput(event: any) {
        event.preventDefault();
        //console.log(userGit)

            

    }

    function handleUserInput(event: any) {
        const value = event.target.value;
        setUserGit(value);
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSearchInput}>
                    <label>Encontre um perfil Github</label>
                    <input
                        type="text"
                        name="gitUser"
                        placeholder="Usuário Github"
                        value={userGit}
                        onChange={handleUserInput}
                    />
                    <Link to={`/form/profile/${userGit}`}>
                        <Button name="Encontrar" />

                    </Link>

                </form>
            </div>
            <Outlet />
        </>
    );
}
