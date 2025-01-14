'use client'

import { Product } from "@/model/product";
import axios from "axios"
import { useEffect, useState } from "react";
import classes from './products.module.css';
import { useRouter } from "next/navigation";

const url = "http://localhost:9000/products";

export default function ListProductsPage(){


    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    useEffect(() => {

        fetchProducts();

    }, [])


    async function fetchProducts(){

        try {
            
            const response = await axios.get<Product[]>(url);
            console.log("fetchProducts", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("fetchProducts", error);

        }
    }

    async function deleteProduct(product: Product){

        try {
            
            const deleteUrl = url + "/" + product.id;
            await axios.delete(deleteUrl);
            //await fetchProducts()

           //deep copy of products(state)
           const copy_of_products = [...products];
           const index = copy_of_products.findIndex(item => item.id === product.id);
           if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
           }


            alert("Product deleted with id " + product.id);

        } catch {
            alert("Failed to delete product with id " + product.id);
        }

    }

    // function test(evt: MouseEvent<HTMLButtonElement>){
    //     console.log(evt);
    // }

    function editProduct(product: Product){
        
        router.push("/products/" + product.id);
    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product  => {
                    return (
                        <div className={classes.product} key={product.id}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>

                            <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                            {/* <button className="btn btn-warning" onClick={test}>Delete</button>&nbsp; */}
                            <button className="btn btn-primary" onClick={() => editProduct(product)}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}