import {useEffect} from 'react';

type MessageProps = {
    text: string,
    color?: string
}


function Message(props: MessageProps){

    // useEffect with a empty dependancy array
    useEffect(() => {

        console.log("Message component mounted");

        // callback is invoked with the component is unmounted
        return () => {
            console.log("Message component unmounted");
        }

    }, [])

    console.log("message props", props);
    return (
        <div style={{borderColor: props.color, borderStyle: "solid", borderWidth: 2, margin: 2}}>
            <h3>Message: {props.text}</h3>
            <p>This is a function component</p>
            <p>Expression: {5 + 7}</p>
            <p>Expression: {new Date().toString()}</p>
        </div>
    )
}

export default Message;

