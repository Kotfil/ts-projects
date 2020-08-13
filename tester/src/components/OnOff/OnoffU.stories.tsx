import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnoffU, PropsType} from "./OnoffU";

export default {
    title: 'OnoffU',
    component: OnoffU,
};

export const Onmode = () => <OnoffU on={true} onChange={x => x} />;
export const Offmode = () => <OnoffU on={false} onChange={x => x} />;




export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true);
    return <OnoffU on={value} onChange={setValue}/>


    }

