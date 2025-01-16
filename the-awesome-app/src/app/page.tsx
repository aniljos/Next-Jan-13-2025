import Counter from "@/components/Counter";
//import Message from "@/components/Message";

export default function Home() {
  return (
    <div>
      <h3>Nextjs React Application</h3>
      <p>Some Content</p>

      {/* <Message text="Hello React" />
      <Message text="Hello Nextjs" color="blue"/> */}

      <Counter initialValue={5}/>
      {/* <Counter initialValue={10}/> */}

    </div>
  );
}
