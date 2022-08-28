import {createStore} from "redux";
import root from "./reducer";
import {devToolsEnhancer} from 'redux-devtools-extension'

const store = createStore(root ,devToolsEnhancer());


export default store;