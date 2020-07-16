import React from "react";

type AccordionPropsType = {
    titleValue: string
    harmonic: boolean
}






function Accordion(props: AccordionPropsType) {
    console.log('Accordion render');
    if (props.harmonic === true) {
        return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
        </div>
    } else {
        return <AccordionTitle title={props.titleValue}/>
    }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: any) {
    console.log('AccordionTitle render');
    return <div>
        <h3>---{props.title}---</h3>
    </div>
}


function AccordionBody(props: any) {
    console.log('AccordionBody render');
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    );
}


export default Accordion;