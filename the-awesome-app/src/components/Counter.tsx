'use client'

import {useState} from 'react';

type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps){

    const [counter, setCounter] = useState(props.initialValue);
    
    function inc(){
        console.log("in inc...");
        //setCounter(counter + 1);
        //setCounter(counter + 1);

        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        console.log("counter", counter);
    }

    function decr() {
        console.log("in decr...");
        setCounter(counter - 1);
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
        </div>
    )
}

export default Counter;