import './App.css'
import Home from "./components/home/Home.tsx";
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./components/auth/login/login.tsx";
import PrivateRoute from "./components/utilits/router/PrivateRoute.tsx";


function App() {

    return (
        <div className='App'>
        <Routes>
            <Route element={<PrivateRoute/>}>
                <Route path="/" element={<Home/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
        </Routes>
        </div>
    )
}

export default App
