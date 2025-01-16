'use client'

import {useEffect, useState} from 'react';
import Message from './Message';

type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps){

   

    const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {

        console.log("Counter updated", counter);

    }, [counter])
    
    function inc(){
        console.log("in inc...");
        //setCounter(counter + 1);
        //setCounter(counter + 1);

        setCounter(prevCounter => prevCounter + 1);
        //setCounter(prevCounter => prevCounter + 1);
        //console.log("counter", counter);
    }

    function decr() {
        debugger;
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
            {/* conditional rendering */}
             
            {counter > 5 ? <Message text={'' + counter} color='blue'/> : null}  
        </div>
    )
} 

export default Counter;