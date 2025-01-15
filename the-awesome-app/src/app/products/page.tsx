'use client'

import { Product } from "@/model/product";
import axios from "axios"



import { useTitle } from "@/hooks/useTitle";
import { useProducts } from "@/hooks/useProducts";
import ProductView from "./ProductView";
import { useCallback, useMemo, useState } from "react";

//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";

export default function ListProductsPage(){

    console.log("rendering ListProducts...");
    

    const {products, setProducts, auth, router} = useProducts(url);    
    const [isMessageVisible, setMessageVisible] = useState(false);

    useTitle("Products");

    const deleteProduct = useCallback(async (product: Product)=>{

      
        try {
            
            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            const deleteUrl = url + "/" + product.id;
            await axios.delete(deleteUrl, {headers});
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

    }, [products])

    // function test(evt: MouseEvent<HTMLButtonElement>){
    //     console.log(evt);
    // }

    const editProduct = useCallback( (product: Product) =>{
        
        router.push("/products/" + product.id);

    }, [])

    // const calculatePrices = () => {

    //     console.log("calculating prices..");
    //     let prices = 0;
    //     products.forEach(p => {
    //         prices += p.price;
    //     })
    //     return prices;
    // }

    const totalPrice = useMemo( () => {

        console.log("calculating prices..");
        let prices = 0;
        products.forEach(p => {
            prices += p.price;
        })
        return prices;
    }, [products])

    return (
        <div>
            <h4>List Products</h4>

            <div>Prices: {totalPrice}</div>

            {isMessageVisible ? <div className="alert alert-info">This is a react page using axios and useState</div>: null}

            <div>
                <button className="btn btn-primary" onClick={() => setMessageVisible(pValue => !pValue)}>Show/Hide</button>
            </div>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product  => {
                    return (
                        <ProductView key={product.id} data={product} onDelete={deleteProduct} onEdit={editProduct}/>
                    )
                })}
            </div>
        </div>
    )

}