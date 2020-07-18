import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Raiting} from "./components/Raiting";
import Formula from "./components/Propser";

function App() {



    return (
        <div>
            <div onClick={(click) => {return click = true}}>
                <Accordion
                    titleValue={'Menu'}
                    harmonic={true}/>
            </div>
            <div>
                <Accordion
                    titleValue={'Users'}
                    harmonic={true}/>
            </div>

        </div>
    );
}

export default App;
