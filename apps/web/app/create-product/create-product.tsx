import {Button} from "@workspace/ui/components/button"
import createProduct from "./actions/create-product"
export default async function CreateProduct(){
    return(
        <div>
            <form action={createProduct}>
                <div className="border-4">
                    <label htmlFor="name" >Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="border-4">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name= "price" />
                </div>
                <Button type="submit">Create Product</Button>
            </form>
        </div>
    )
}