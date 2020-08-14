import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import state, {dialogsPagePropTypes, stateObjectPropTypes} from "../redux/redux";



const Dialogs = ({messages,dialogs}: dialogsPagePropTypes) => {

    const dialogsDataEl = messages.map(e => <DialogsItem id={e.id} name={e.name} /> );
    const messagesDataEl = dialogs.map(e => <Message messages={e.messages} key={e.id} /> );

   let createrRef: RefObject<HTMLTextAreaElement> = React.createRef();
            let changeArea = () =>  {
                let text = createrRef.current && createrRef.current.value;
                    alert(text);

            }
   return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsDataEl}
            </div>
            <div>
                {messagesDataEl}
            </div>
            <div className={s.area}>
                <textarea ref={createrRef}> </textarea>
                <div>
                    <button onClick={changeArea}>Post</button>
                </div>

            </div>

        </div>

    );

};

export default Dialogs;