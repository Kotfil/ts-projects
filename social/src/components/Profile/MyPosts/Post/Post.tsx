import React from "react";
import s from './Post.module.css'

type PostPropTypes = {
    message: string
    likesCount: number
}


const Post: React.FC<PostPropTypes> = (props) => {
    return (
        <div>
            <div className={s.post}>
                <div className={s.item}>
                    <span>Post</span>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/en/d/dc/Pocket_Mortys.png'/>
                        {props.message}
                    </div>
                        <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}
export default Post