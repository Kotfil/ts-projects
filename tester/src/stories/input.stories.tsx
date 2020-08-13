import React, {ChangeEvent, FormEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
};

export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            const actionValue = e.currentTarget.value;
            setValue(actionValue)
        };

    return <> <input value={value} onChange={onChange}/> - {value}</>
};
export const GetValueUncontrolledInputByButton = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <> <input ref={inputRef} id={"inputId"}/>
        <button onClick={save}>save</button>
        - actual value {value}</>
};
export const ControlledInput = () => {
        const [parent,setParent] = useState('');
        const onChange = (e:ChangeEvent<HTMLInputElement>) => {setParent(e.currentTarget.value)};

return <> <input value={parent} onChange={onChange} /> {parent}  'Now This State'</>
};
export const ControlledCheckbox = () => {
    const [parent,setParent] = useState(true);
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {setParent(e.currentTarget.checked)};

    return <> <input type='checkbox' checked={parent} onChange={onChange} /> {parent.toString()}  'Now This State'</>
}

export const ControlledSelect = () => {
    const [parent,setParent] = useState<string | undefined>(undefined);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) =>  {setParent(e.currentTarget.value)};

    return <><select onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Filipp</option>
        <option value={'2'}>Vadim</option>
        <option value={'3'}>Evgen</option>
    </select></>
};

// export const ControlledInputWithFixedValue = () => <input value={'22'}/>