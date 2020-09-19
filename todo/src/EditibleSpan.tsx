import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditibleSpanPropsType = {
    title: string
    onChange: (newTitle:string) => void
}


export function EditibleSpan(props: EditibleSpanPropsType) {
    let [editMode,setEditMode] = useState(false);
    let [title,setTitle] = useState('');
    const activateEditMode = () =>
    {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () =>
    {
        setEditMode(false)
        props.onChange(title)
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return editMode
        ? <TextField onBlur={activateViewMode} value={title} onChange={onChangeTitle} autoFocus />
        : <span style={{padding: '20px'}}  onDoubleClick={activateEditMode}>{props.title}</span>
}