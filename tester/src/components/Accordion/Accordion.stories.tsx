import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');
export const menuAccordion = () => <Accordion titleValue={"Menu"} colapsed={true} onChange={callback} />;
export const userAccordion = () => <Accordion titleValue={"Title"} colapsed={false} onChange={callback} />;

export const ModeChanging = () => {
    console.log('Accordion changed Mode');
    const [value,setValue] = useState<boolean>(true);
    return <Accordion titleValue={'users'}  colapsed={value} onChange={() => {setValue(!value)}}/>

};







