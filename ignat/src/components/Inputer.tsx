import React, {KeyboardEvent, ReactText,ChangeEvent} from "react";

type checkPropTypes = {
    id: string
    name: string
}


type PropTypes = {
    inputCheck: Array<checkPropTypes>

}

function Inputer(props: PropTypes) {



    return(
        <div>
            <input />
            <button>Enter</button>
            <div>

            </div>

        </div>
    )
}

export default Inputer;