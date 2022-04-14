import Home from './components/pages/home/Home'
import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/single/Single"
import Write from './components/pages/write/Write';
import Settings from './components/pages/settings/Settings';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import About from './components/pages/about/About';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App(){
    const {user} = useContext(Context);
    return(
        <Router>
            <TopBar/>
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/register" element={user ? <Home/> : <Register/>} />
            <Route path="/login" element={user ? <Home/> : <Login/>} />
            <Route path="/settings" element={user ? <Settings/> : <Register/>} />
            <Route path="/write" element={user ? <Write/> : <Register/>} />
            <Route path="/post/:postId" element={<Single/>} />
            <Route path="/about" element = {<About/>}/>
            </Routes>
        </Router>
    );
}

export default App;