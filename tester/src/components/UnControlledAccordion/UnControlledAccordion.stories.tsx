import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion ',
    component: UnControlledAccordion,
};

const callback = action('component change status');


export const MadeChanging = () => {
        return <UnControlledAccordion titleValue={'Users'}/>
}

