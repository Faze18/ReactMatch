import React from "react";
const Holder = props => (
    <div className="col-md-3">
        <button onClick={props.buttonTest} data_key={props.src}>
            <img src={props.src} data_key={props.src} />
        </button>
    </div>
);

export default Holder;