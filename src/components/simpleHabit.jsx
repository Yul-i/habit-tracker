import React, { useState, useRef, useCallback, useEffect } from 'react';

const simpleHabit = () => {
    // state = {
    //     count : 0,
    // };
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(()=> {
        setCount(count+1);
    });

    useEffect(()=>{
        console.log(`mounted&update! ${count}`);
    }, [count]);
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button 
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-squere"></i>
            </button>
        </li>
    );
};

export default simpleHabit;