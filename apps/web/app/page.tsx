import { Button } from "@workspace/ui/components/button"
import CreateProduct from "./create-product/create-product"
import Products from "./products/products"
import {prisma} from "@workspace/database"

 export const dynamic = "force-dynamic";

export default async function Page() {
 const users = await prisma.user.findMany();
  return (
    <div className="flex items-baseline flex-col">
      <h1 className="pt-10 font-bold">API NEST CHECK</h1>
      <CreateProduct/>
      <Products/>
      <h1 className="pt-10 font-bold">Prisma check</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>

    </div>
  )
}
