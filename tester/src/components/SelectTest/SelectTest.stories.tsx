import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {SelectTest} from "./SelectTest";

export default {
    title: 'SelectTest',
    component: SelectTest,
};

export const burnSelectTest = () => <>
    <SelectTest
        onChange={action('Value changed')}
        value={'1'}
        names={[
            {value: '1', title: 'Kiev'},
            {value: '2', title: 'Sulimivka'},
            {value: '3', title: 'Boryspil'}
            ]}
        />
    </>;



