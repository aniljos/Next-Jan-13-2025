import { useRouter } from "next/navigation";
import {useSelector} from 'react-redux'
import { AppState } from "@/redux/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/model/product";
export function useProducts(url: string){


    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) =>  state.auth);
    const router = useRouter();

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts(){

        try {

            if(!auth.isAuthenticated){
                router.push("/login");
                return;
            }
            
            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product[]>(url, {headers});
            console.log("fetchProducts", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("fetchProducts", error);

        }
    }


    return {products, setProducts, auth, router, fetchProducts};
}