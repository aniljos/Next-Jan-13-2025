'use client'
import { Product } from "@/model/product";
import axios from "axios";
import { useParams, useRouter } from "next/navigation"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
export default function EditProductPage(){

    const params = useParams();
    const [product, setProduct] = useState<Product>({id:0, name:"", price:0, description:"", imageUrl: ""});
    const router = useRouter();
    
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

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){

        const copy_of_product = {...product};
        copy_of_product.name = evt.target.name;
        setProduct(copy_of_product);
    }

    async function save(evt: MouseEvent<HTMLButtonElement>){
        
        evt.preventDefault();

        try {
            const url = "http://localhost:9000/products/" + product.id
            await axios.put(url, product);
            router.back();
        } catch {
            
        }
    }
     function cancel(evt: MouseEvent<HTMLButtonElement>){

        evt.preventDefault();
        router.back();
    }

    return (
        <div>
            <h4>Edit Product  Id: {params.id}</h4>
            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={product?.name} onChange={handleNameChange}/>    
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" value={product?.price} 
                        onChange={e => setProduct({...product, price: Number(e.target.value)})}/>    
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" value={product?.description}
                                onChange={e => setProduct({...product, description: e.target.value})}   />    
                </div>

                <br />

                <div>
                    <button className="btn btn-info" onClick={save}>Save</button>&nbsp;
                    <button className="btn btn-warning" onClick={cancel}>Cancel</button>

                </div>

            </form>

        </div>
    )
}