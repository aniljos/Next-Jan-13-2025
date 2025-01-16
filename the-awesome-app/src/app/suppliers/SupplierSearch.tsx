'use client'

import { sayHello } from "@/actions/actions";
import { JSX, useEffect, useState } from "react"

type SupplierSearchProps = {
    fetchData: (query: string) => Promise<JSX.Element>
}

export function SupplierSearch(props: SupplierSearchProps) {

    const [searchQuery, setSearchQuery] = useState("");
    const [sayHelloResult, setSayHelloResult] = useState<JSX.Element>()
    const [suppliersView, setSetSuppliersView] = useState<JSX.Element>()

    useEffect(() => {

        async function loadData() {
            const view = await props.fetchData(searchQuery);
            setSetSuppliersView(view);
        }
        loadData();

    }, [])

    async function searchSuppliers() {

        const view = await props.fetchData(searchQuery);
        setSetSuppliersView(view);

    }

    async function invokeSayHello() {
        const result = await sayHello("server actions");
        setSayHelloResult(result);
    }

    return (

        <div>
            <h5>Search</h5>

            <input type="search" className="form-control" value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} />
            <br />
            <button className="btn btn-info" onClick={searchSuppliers}>Search</button>

            <div className="alert alert-info">
                Searching for {searchQuery}
            </div>

            <button className="btn btn-info" onClick={invokeSayHello}>Invoke SayHello</button>
            {sayHelloResult ? <div className="alert alert-primary">
                {sayHelloResult}
            </div> : null}


            {suppliersView}
        </div>
    )
}