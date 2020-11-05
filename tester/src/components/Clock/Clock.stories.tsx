import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Clock, PropsType} from "./Clock";
import styles from './ClockStyle.module.css'

export default {
    title: 'Clock',
    component: Clock,
};


export const BaseAnalogExample = (props: PropsType) => {
  return <Clock mode={'analog'}/>
};

export const BaseExample = () => {
  return <Clock mode={'digital'}/>
};







