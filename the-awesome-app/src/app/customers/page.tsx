import { Customer } from "@/model/customer";
import axios from "axios"

export default async function CustomerPage(){

    const url = "http://localhost:9000/customers";

    const response = await axios.get<Customer[]>(url);
    const customers = response.data;

    return (
        <div>
            <h4>Customers</h4>

            <div>
                {customers.map(customer => {
                    return (
                        <div key={customer.id}>
                            <p>Id: {customer.id}</p>
                            <p>Name: {customer.name}</p>
                            <p>Desc: {customer.location}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}