import { Customer } from "@/model/customer";
import Link from "next/link";
import { Suspense } from "react";
//import axios from "axios"

export default async function ListCustomersPage(){

    await new Promise(resolve => setTimeout(resolve, 5000));
    return (

        <div>
            <h4>List Customers</h4>
            <p>Page that fetch mutiple set of data from different endpoints</p>

            <Suspense fallback={<div className="alert alert-info">Loading Customers View #1(10 secs)</div>}>
                <CustomerView interval={10000}/>
            </Suspense>
            
            <Suspense fallback={<div className="alert alert-primary">Loading Customers View #2(5 secs)</div>}>
                <CustomerView interval={5000}/>
            </Suspense>
        </div>
        
        
    )
}

type CustomerViewProps = {
    interval: number
}
export async function CustomerView(props: CustomerViewProps) {

    await new Promise(resolve => setTimeout(resolve, props.interval));
    const url = "http://localhost:9000/customers";

    //const response = await axios.get<Customer[]>(url);
    //const customers = response.data;

    const response = await fetch(url, {cache: "no-store"});
    //const response = await fetch(url,{method:"GET", });
    const customers = await response.json() as Customer[];
    console.log("CustomerPage", customers);

    return (
        <div>
            <h4>Customers</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td> <Link href={"/customers/" + customer.id}> {customer.name} </Link></td>
                                <td>{customer.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

           

        </div>
    )
}