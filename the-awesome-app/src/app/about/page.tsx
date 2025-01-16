export default async function AboutPage(){

    console.log("rendering about page...");

    // simulating a thread.sleep(5000);
    //await new Promise((resolve) => {setTimeout(resolve, 5000)});
    
    //simulate an error...
    //throw new Error("Somethin went wrong...");
    return (
        <div>
            <h4>About</h4>
            <p>This is a Next.js application using React 19</p>

            
        </div>
    )

}