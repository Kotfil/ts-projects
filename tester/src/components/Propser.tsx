import React from "react";

type formulaPropsType = {
    value: number
}



function Formula(props: formulaPropsType) {
    return (
      <div>
          <h1>{props.value}</h1>
      </div>
    );
}

export default Formula;