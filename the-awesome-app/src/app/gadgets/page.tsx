'use client'

import { CartItem } from '@/model/CartItem';
import { Product } from '@/model/product';
import { addItemToCart } from '@/redux/gadgetsReducer';
import { AppDispatch } from '@/redux/store';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';


const baseUrl = "http://localhost:9000/products";
function GadgetStore(){

    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch<AppDispatch>();
   
    useEffect(() => {
        fetchProducts();
    }, [])
    async function fetchProducts(){

        try {

            const response = await axios.get<Product[]>(baseUrl);
            console.log("fetchProducts", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("fetchProducts", error);

        }
    }
   
    function addToCart(product: Product): void {
        
        //dispatch({type: "addToCart", payload: new CartItem(product, 1)});

        const action = addItemToCart(new CartItem(product, 1));
        dispatch(action);
    }

    function renderProducts() {

        const productsView =  products.map((item) => {
           

            return (
                <div className="col" key={item.id} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;