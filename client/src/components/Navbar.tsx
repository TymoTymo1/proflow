import "../styles/Navbar.css"
import React, {useReducer} from "react";
import InsertSection from "./sections/InsertSection.tsx";
import HomeSection from "./sections/HomeSection.tsx";
import FileSection from "./sections/FileSection.tsx";

const INSERT = 'DISPLAY_INSERT';
const HOME = 'DISPLAY_HOME';
const FILE = 'DISPLAY_FILE'

const buttonClicked = (state: string, action: string) => {
    if (action !== INSERT && action !== HOME && action != FILE) {
        return state;
    }
    return action;
}

const Navbar: React.FC = () => {
    const [state, dispatch] = useReducer(buttonClicked, 'DISPLAY_FILE');

    return (
        <div className="navbar">
            <div className="navbar-item file" onClick={()=>dispatch(FILE)}>File</div>
            <div className="navbar-item home" onClick={()=>dispatch(HOME)}>Home</div>
            <div className="navbar-item insert" onClick={()=>dispatch(INSERT)}>Insert</div>

            <div className="sections">
                {state === INSERT && <InsertSection/>}
                {state === HOME && <HomeSection/>}
                {state === FILE && <FileSection/>}
            </div>
        </div>
    )
}

export default Navbar;
