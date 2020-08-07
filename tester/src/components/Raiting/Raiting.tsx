import React from "react";

export function Raiting(props: any) {

    return (
        <div>
            <Star selected={props.value > -1}/><button>1</button>
            <Star selected={props.value > 1}/><button>2</button>
            <Star selected={props.value > 2}/><button>3</button>
            <Star selected={props.value > 3}/><button>4</button>
            <Star selected={props.value > 4}/><button>5</button>
        </div>
    );
}

function Star(props: any) {
    if (props.selected === true) {
        return <span><b>star </b> </span>
    } else {
        return   <span>star </span>
    }


}