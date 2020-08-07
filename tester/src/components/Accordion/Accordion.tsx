import React from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {

    console.log('SelfControlledAccordion render');
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                 <AccordionBody />
            </div>
        );
    }



// function Accordion2 (props: AccordionPropsType) {
//     console.log('SelfControlledAccordion render');
//
//     if (colapsed === true) {
//
//         return <div>
//
//         </div>
//     } else {
//         return (
//         <div>
//         <AccordionTitle title={props.titleValue} />
//             <AccordionBody />
//         </div>
//         );
//     }
// }

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
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