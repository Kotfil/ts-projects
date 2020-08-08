import React, {useState} from 'react';
import './App.css';
// import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";
// import UncontrolledOnoffR from "./components/OnOff/UncontrolledOnoffR";
// import {Raiting, RatingValueType} from "./components/Raiting/Raiting";
import UncontrolledRaiting from "./components/Raiting/UncontrolledRaiting";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnoffU from "./components/UncontrolledOnOff/UncontrolledOnoffU";
import OnoffU from "./components/OnOff/OnoffU";


// type  PropType = {
//     value: 0|1|2|3|4
//     setValue: () => void
// }

function App() {

// let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
//let [colapsed, setColapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState(false);
    return (
        <div className={'App'}>
            <div>
                <UncontrolledOnoffU
                    onChange={setSwitchOn}/> {switchOn.toString()}
                {/*<Raiting*/}
                {/*    value={ratingValue}*/}
                {/*    onClick={setRatingValue}/>*/}

                {/*<SelfControlledAccordion titleValue='Menu'/>*/}
                {/*    <UncontrolledRaiting />*/}
                {/*<Accordion titleValue={'Menu'}*/}
                {/*           colapsed={colapsed}*/}
                {/*           onChange={() => {setColapsed(!colapsed)}}*/}
                {/*/>*/}
                {/*<OnoffU on={on} onChange={() => setOn(!on)}/> {on.toString()}*/}
                {/*    <Raiting value={2}/>*/}
                {/*    <Raiting value={3}/>*/}
                {/*    <Raiting value={4}/>*/}
                {/*    <Raiting value={5}/>*/}

            </div>
        </div>
    );
}

export default App;
