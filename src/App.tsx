import React from 'react';
import Menu from "./components/Menu/Menu";
import {Container, Button} from '@mui/material';
import './App.css';
import WorkingWindow from "./components/WorkingWindow/WorkingWindow";

function App() {
    return (
        <div className="App">
            <div className="flex flex-row place-content-center">
                <Menu/>
                <WorkingWindow/>
            </div>

        </div>
    );
}

export default App;
