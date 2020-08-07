import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}
type PropType = boolean

function SelfControlledAccordion(props: AccordionPropsType) {
        let [colapsed,setColapsed] = useState(false)



    console.log('SelfControlledAccordion render');
        return (
            <div onClick={() => {}}>
                <AccordionTitle title={props.titleValue} onClick={() => {setColapsed(!colapsed)}}/>

                {!colapsed && <AccordionBody />}
            </div>
        );
    }


// function Accordion2 (props: AccordionPropsType) {
//     console.log('SelfControlledAccordion render');
//
//     //if (props.colapsed === true) {
//
//
//         return (
//         <div>
//         <AccordionTitle title={props.titleValue} />
//             <AccordionBody />
//         </div>
//         );
// }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle render');
    return <div>
        <h3 onClick={() => {props.onClick()}}>---{props.title}---</h3>
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


export default SelfControlledAccordion;