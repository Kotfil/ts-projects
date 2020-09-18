import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Raiting";

export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyStars = () => <Rating value={0} onClick={x => x}/>;
export const Raiting1 = () => <Rating value={1} onClick={x => x}/>;
export const Raiting2 = () => <Rating value={2} onClick={x => x}/>;
export const Raiting3 = () => <Rating value={3} onClick={x => x}/>;
export const Raiting4 = () => <Rating value={4} onClick={x => x}/>;

const RaitingMemo = () => {
    console.log('Hello')
    return (
        <div>
            Hello
        </div>
    )
}
const MemosR = React.memo(RaitingMemo);


export const RaitingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return (
        <>
            <Rating value={rating} onClick={setRating}/>
            <MemosR/>
        </>
    )
}

