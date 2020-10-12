import React from "react";
import store from "./redux-store";

const ContextStore = React.createContext(store);

export default ContextStore