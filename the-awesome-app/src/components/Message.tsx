type MessageProps = {
    text: string,
    color?: string
}


function Message(props: MessageProps){

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

