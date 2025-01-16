'use client'

import { handleSubmit } from "@/actions/actions"
import { useActionState, useEffect } from "react"


export default function AddSupplierPage() {

    const [formStatus, formAction] = useActionState(handleSubmit, {status: -1, message: "pending"});

    useEffect(() => {

        

    }, [formStatus])
    return (
        <div>
            <h4>Add Supplier</h4>

            
            <form action={formAction}>

                <div className="alert alert-info">
                    Form status: {formStatus.status}, message: {formStatus.message}
                </div>


                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input id="id" name="supplierId" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="supplierName" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactPerson">Contact</label>
                    <input id="contactPerson" name="contactPerson" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" className="form-control" />
                </div>
                <br />
                <button className="btn btn-info">Save</button>
            </form>
        </div>
    )
}