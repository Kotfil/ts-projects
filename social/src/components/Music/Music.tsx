import React from "react";
import s from './Music.module.css'
import MusicStatus from "./MusicStatus";

const Music = () => {
    return (<div>
        <div>
            Music
        </div>
        <div>
            <MusicStatus status={'Search'}/>
        </div>
    </div>);
}
export default Music;