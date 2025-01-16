// http://localhost:3000/api/suppliers

import { NextResponse } from "next/server";
import { suppliers } from "@/data/suppliers";


//GET http://localhost:3000/api/suppliers
export function GET(){

    // Access the data store/ database
    
    return NextResponse.json(suppliers);
    
}

//POST
//export function POST(){}

//PUT
//export function PUT(){}