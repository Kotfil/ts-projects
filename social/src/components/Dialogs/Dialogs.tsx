import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import state, {
    dialogsPagePropTypes,
    DialogsPropTypes, MessagesPropTypes,
    stateObjectPropTypes,
    updateNewMessageText
} from "../redux/redux";

type PropTypes = {
    newMessageText: string
    updateNewMessageText: (text: string) => void
    addMessage: (text: string) => void
    dialogs: Array<DialogsPropTypes>
    messages: Array<MessagesPropTypes>
}


const Dialogs = (props: PropTypes) => {

    const dialogsDataEl = props.messages.map(e => <DialogsItem id={e.id} name={e.name} /> );
    const messagesDataEl = props.dialogs.map(e => <Message messages={e.messages} key={e.id} /> );

   let createrRef: RefObject<HTMLTextAreaElement> = React.createRef();
            let addMessages = () =>  {
                props.addMessage(createrRef.current ? createrRef.current.value : '');
                    if(createrRef.current) {
                        return createrRef.current.value = ''
                    }

            };

            let changeMessage = () => {
                updateNewMessageText(createrRef.current ? createrRef.current.value : '');
                if (createrRef.current)
                    return createrRef.current.value = ''
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
                          value={props.newMessageText}
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