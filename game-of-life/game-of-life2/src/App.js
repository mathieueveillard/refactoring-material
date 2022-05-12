import * as gameOfLife from './script/game';
import {useEffect} from "react";
import {initialize} from "./script/game";
import {randomButtonHandler} from "./script/game"

const App = () => {
    useEffect(()=> {
        initialize();
        randomButtonHandler();
    },[])
    return (
    <div className="App">
        <div id="gridContainer">

        </div>

        <div className="controls">
            <button id="start"><span>Start</span></button>
            <button id="clear"><span>Clear</span></button>
            <button id="random"><span>Random</span></button>
        </div>
    </div>

    );
}

export default App;
