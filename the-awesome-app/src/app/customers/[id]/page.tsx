import { Customer } from "@/model/customer";

import Link from "next/link";

type CustomerPageProps = {
    params: Promise<{id: number}>
}


export default async function CustomerPage(props: CustomerPageProps){

    
    const {id} = await props.params;
    const url = "http://localhost:9000/customers/" + id;
    const response = await fetch(url);
    const customer = await response.json() as Customer;
    

    return (

        <div>
            <h4>Customer: {customer.id}</h4>
            <p><mark> {customer.name} </mark>is located in {customer.location}</p>

            <div>
                <Link href="/customers">Back</Link>
            </div>
        </div>
    )
}