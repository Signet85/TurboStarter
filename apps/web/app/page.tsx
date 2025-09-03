import { Button } from "@workspace/ui/components/button"
import CreateProduct from "./create-product/create-product"
import Products from "./products/products"

 export const dynamic = "force-dynamic";

export default function Page() {
 
  return (
    <div className="flex items-center flex-col  justify-center min-h-svh">
      <h1 className="font-bold pb-5">Tailwind & Shadcn Check</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
      <h1 className="pt-10 font-bold">API NEST CHECK</h1>
      <CreateProduct/>
      <Products/>

    </div>
  )
}
