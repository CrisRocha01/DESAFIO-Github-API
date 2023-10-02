import { Outlet } from "react-router-dom";
import Hearder from "../../components/hearder";
import "./Home.css";

export default function Home() {
    return (
        <>
            <Hearder />
            <Outlet />
        </>
    );
}
