import { TitlePage } from "@/modules/shared";
import { ProductList } from "@/modules/products";

export default function ProductsPage() {
    return (
        <>
            
            <TitlePage
                btnPath="/products/new"
                btnTitle="Agregar producto"
                description="Listado de productos de tu menu"
                title="Productos"
            />

            <ProductList/>

        </>
    );
}