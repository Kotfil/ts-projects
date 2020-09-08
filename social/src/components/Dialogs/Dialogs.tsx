import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import state, {
    ActionsTypes,
    dialogsPagePropTypes,
    DialogsPropTypes, MessagesPropTypes,
    stateObjectPropTypes,
} from "../redux/state";

type PropTypes = {
    newMessageText: string
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>
    dispatch: (action: ActionsTypes) => void
}
const Dialogs: React.FC<PropTypes> = ({newMessageText,dialogs,messages,dispatch}: PropTypes) => {
    const dialogsDataEl = messages.map(e => <DialogsItem id={e.id} name={e.name}/>);
    const messagesDataEl = dialogs.map(e => <Message messages={e.messages} key={e.id}/>);

    let createrRef: RefObject<HTMLTextAreaElement> = React.createRef();
    let addMessages = () => {
        // props.addMessage(createrRef.current ? createrRef.current.value : '');
        // if (createrRef.current) {
        //     return createrRef.current.value = ''
        dispatch({type: "ADD-MESSAGE"})
        };

    let changeMessage = () => {
        if (createrRef.current) {
            dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: createrRef.current.value});
            createrRef.current.value = ''
        }
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsDataEl}
            </div>
            <div>
                {messagesDataEl}
            </div>
            <div className={s.area}>
                <textarea ref={createrRef}
                          value={newMessageText}
                          onChange={changeMessage}
                > </textarea>
                <div>
                    <button onClick={addMessages}>Send</button>
                </div>

            </div>

        </div>

    );

};

export default Dialogs;