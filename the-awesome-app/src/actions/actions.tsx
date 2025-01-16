'use server'

// server action
export async function sayHello(message: string){

    console.log("invoking sayHello", message)
    //return "Hello " + message;
    return (
        <div>
            <p>Hello {message}</p>
        </div>
    )
}