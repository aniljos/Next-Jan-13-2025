// http://localhost:3000/api/suppliers

import { NextResponse } from "next/server";
import { suppliers } from "@/data/suppliers";


//GET http://localhost:3000/api/suppliers
export function GET(request: Request) {

    // Access the data store/ database
    const url = new URL(request.url);
    const query = url.searchParams.get('query');

    if (query) {
        const filteredSuppliers = suppliers.filter(item => item.name.toLowerCase().includes(query.toLowerCase())
            || item.email.toLowerCase().includes(query.toLowerCase())
            || item.contactPerson.toLowerCase().includes(query.toLowerCase())
            || item.location.toLowerCase().includes(query.toLowerCase()));
        return NextResponse.json(filteredSuppliers);
    }


    return NextResponse.json(suppliers);

}

//POST
export async function POST(request: Request) {

    try {
        const supplier = await request.json();
        if (supplier && supplier.id && supplier.name) {

            suppliers.push(supplier);
            return NextResponse.json({ message: "Saved" });
        }
        else {
            return NextResponse.json({ message: "Not saved" }, { statusText: "Bad request", status: 400 });
        }
    } catch (error) {
        console.log("supplier POST", error);
        return NextResponse.error();
    }


}

//PUT
//export function PUT(){}