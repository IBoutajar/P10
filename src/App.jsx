import './App.css'
import Home from './page/Home/home';
import SignIn from './page/signIn/signIn';
import User from './page/user/user';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FeaturesData from "./data/features.json"; 

function App() {
 return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home featuresData={FeaturesData} />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/user" element={ <User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
