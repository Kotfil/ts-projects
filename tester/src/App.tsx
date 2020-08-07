import React, {useState} from 'react';
import './App.css';
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";
import OnoffR from "./components/OnOff/OnoffR";
import {Raiting} from "./components/Raiting/Raiting";
import UncontrolledRaiting from "./components/Raiting/UncontrolledRaiting";

function App() {

    type AccordionPropsType = {
        titleValue: string
    }


    return (
        <div className={'App'}>
            <div>
                <OnoffR/>
                <SelfControlledAccordion titleValue='Menu'/>
                    <UncontrolledRaiting />
                {/*<Accordion*/}
                {/*    titleValue={'Menu'}*/}
                {/*    colapsed={true}/>*/}
                {/*    <Raiting value={0}/>*/}
                {/*    <Raiting value={2}/>*/}
                {/*    <Raiting value={3}/>*/}
                {/*    <Raiting value={4}/>*/}
                {/*    <Raiting value={5}/>*/}

            </div>
        </div>
    );
}

export default App;
