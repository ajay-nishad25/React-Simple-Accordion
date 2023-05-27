import React, { useState } from 'react'
import "./myaccordion.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MyAccordian = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="question-holder">
                <div className='question-div'>
                    <h3 className='question'>{question}</h3>
                    <p className='sign' onClick={() => { setShow(!show) }}>{show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</p>
                </div>
                {show && <p className="answer" style={{ marginLeft: "10px" }}>{answer}</p>}
            </div>
        </>
    )
}

export default MyAccordian;
