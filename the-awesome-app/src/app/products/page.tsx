'use client'

import axios from "axios"
import { useEffect } from "react"

const url = "http://localhost:9000/products";

export default function ListProductsPage(){

    useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get(url);
            console.log("fetchProducts", response);

        } catch (error) {
            console.log("fetchProducts", error);

        }
    }

    return (
        <div>
            <h4>List Products</h4>
        </div>
    )

}