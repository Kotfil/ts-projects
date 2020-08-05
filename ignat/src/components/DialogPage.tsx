import React from "react";
import s from './DialogPage.module.css';

const DialogPage = () => {
    return (

        <div className={s.wrapper}>

            <div className={s.fil}>
                Филипп Котенко
            </div>

            <div className={s.next}>
                Помни, самурай, что важно делать мелкие шаги, но регулярно, и тогда ты 100% придёшь к финишу!

            </div>
            <div className={s.time}>
                23:20
            </div>
        </div>

    );
}

export default DialogPage;