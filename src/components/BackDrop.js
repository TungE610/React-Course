import react from "react";

function BackDrop(props) {
    return <div className="backdrop" onClick={props.onClick}></div>;
}

export default BackDrop;
