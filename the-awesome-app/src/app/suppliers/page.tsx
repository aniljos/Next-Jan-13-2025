import { Supplier } from "@/model/supplier";
import { SupplierSearch } from "./SupplierSearch";

export default async function SupplierPage() {



    async function fetchSuppliers(query: string) {
        'use server'

        const url = "http://localhost:3001/api/suppliers?query=" + query;
        const response = await fetch(url);
        const suppliers = await response.json() as Supplier[];
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => {

                        return (
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.location}</td>
                                <td>{supplier.contactPerson}</td>
                                <td>{supplier.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    return (

        <div>
            <h4>Suppliers</h4>

            <SupplierSearch fetchData={fetchSuppliers} />


        </div>
    )

}