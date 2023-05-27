import React from "react";
import "./accordion.css";
import MyAccordion from "./MyAccordion";

import data from "./data";

const Accordian = () => {

    return <>
        <h1 style={{ textAlign: "center" }}>React Questions</h1>

        {/* mapping data api  */}
        {data.map((currentElement) => {
            const {id} = currentElement;
            return(<MyAccordion key={id} {...currentElement}/>);
            
        })}
        
    </>

}

export default Accordian;
