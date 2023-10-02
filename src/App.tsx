import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Form from "./routes/Home/Form";
import Profile from "./routes/Home/Form/Profile";
import NotFound from "./routes/Home/Form/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomeBody />}/>
                      <Route path="/form" element={<Form />} >
                        <Route path="/form/profile/:user" element={<Profile/>} />
                        <Route path="/form/profile/nl" element={<NotFound />} />
                      </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
