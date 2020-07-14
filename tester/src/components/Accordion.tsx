import React from "react";

function Accordion(props: any) {
    console.log('Accordion render')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody title={props.title}/>
        </div>
    );
}

function AccordionTitle(props:any) {
    console.log('AccordionTitle render')
    return <div>
        <h1>{props.title}</h1>
    </div>
}

function AccordionBody(props: any) {
    console.log('AccordionBody render')
    return (
    <div>
        <h1>{props.title}</h1>
    </div>
    );
}

export default Accordion;