import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnoffU} from "./UncontrolledOnoffU";

export default {
    title: 'UncontrolledOnoffU ',
    component: UncontrolledOnoffU,
};

const callback = action('component change status');

export const OnMode = () => <UncontrolledOnoffU defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UncontrolledOnoffU defaultOff={false} onChange={callback}/>;
export const DefauldInputValue = () => <input defaultValue={'22'}/>;

