import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnoffU, PropsType} from "./OnoffU";

export default {
    title: 'OnoffU',
    component: OnoffU,
};

export const Onmode = () => <OnoffU on={true} onChange={x => x} />;
export const Offmode = () => <OnoffU on={false} onChange={x => x} />;


const OnOffMemo = () => {
    console.log('Hello')
    return (
      <div>
          Hello
      </div>
    )
}
const Memos = React.memo(OnOffMemo);



export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true);
    const [count,setCount] = useState<number>(0);
    return (
    <>
        <button onClick={() => {setCount(count + 1)}}>++++</button>
    <OnoffU on={value} onChange={setValue}/>
    <Memos />
    </>
    )
    }

