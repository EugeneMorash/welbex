import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import './App.scss'
import {Services} from "./components/Services/Services";
import {Widgets} from "./components/Widgets/Widgets";
import {Integrations} from "./components/Integrations/Integrations";
import {Cases} from "./components/Cases/Cases";
import {Certificates} from "./components/Certificates/Certificates";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Routes>
                    <Route path='main/*' element={<Main/>}/>
                    <Route path='/services/*'
                           element={<Services/>}/>
                    <Route path='/widgets/*'
                           element={<Widgets/>}/>
                    <Route path='/integrations/*' element={<Integrations/>}/>
                    <Route path='/cases/*' element={<Cases/>}/>
                    <Route path='/certificates/*' element={<Certificates/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
