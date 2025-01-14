'use client'
import { Product } from "@/model/product";
import axios from "axios";
import { useParams } from "next/navigation"
import { MouseEvent, useEffect, useState } from "react";
export default function EditProductPage(){

    const params = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {

        fetchProduct();

    }, [])

    async function fetchProduct(){
        
        try {
            
            const url = "http://localhost:9000/products/" + params.id;
            const response = await axios.get<Product>(url);
            setProduct(response.data);
        } catch {
            
        }
    }

    function save(evt: MouseEvent<HTMLButtonElement>){
        
        evt.preventDefault();

    }

    return (
        <div>
            <h4>Edit Product  Id: {params.id}</h4>
            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={product?.name}/>    
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" value={product?.price}/>    
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" value={product?.description}/>    
                </div>

                <br />

                <div>
                    <button className="btn btn-info" onClick={save}>Save</button>&nbsp;
                    <button className="btn btn-warning">Cancel</button>

                </div>

            </form>

        </div>
    )
}