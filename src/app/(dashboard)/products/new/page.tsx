import { TitlePage } from "@/modules/shared";
import { NewProductForm } from "@/modules/products";

export default function() {
    return (
        <>
            <TitlePage
                btnPath="/products"
                btnTitle="Volver"
                description="Agrega un nuevo producto"
                title="Nuevo producto"
            />
        
            <NewProductForm/>
        
        </>
    );
}