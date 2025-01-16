'use server'

//import { redirect } from "next/navigation";

// server action
export async function sayHello(message: string){

    console.log("invoking sayHello", message)
    //return "Hello " + message;
    return (
        <div>
            <p>Hello {message}</p>
        </div>
    )
}

export async function handleSubmit(prevData: object, formData: FormData){

    const supplier = {
        id: formData.get("supplierId")?.toString(),
        name: formData.get("supplierName")?.toString(),
        location: formData.get("location")?.toString(),
        contactPerson: formData.get("contactPerson")?.toString(),
        email: formData.get("email")?.toString(),
    }

    if(supplier && supplier.id){
        console.log("handleSubmit", supplier);
        //redirect("/suppliers");
        return {
            status: 0,
            message: "saved"
        }
    }
    else{

        return {
            status: 1,
            message: "invalid data"
        }
    }


    

}