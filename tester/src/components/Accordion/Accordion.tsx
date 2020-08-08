import React from "react";

type AccordionPropsType = {
    titleValue: string
    colapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

    // function chColapsed() {
    //     if(props.colapsed === true) {
    //         return <AccordionBody /> }else{ return null
    //     }
    // }

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.colapsed && <AccordionBody/>}
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
    onChange:() => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <div>

        <h3 onClick={props.onChange}>>---{props.title}---</h3>

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