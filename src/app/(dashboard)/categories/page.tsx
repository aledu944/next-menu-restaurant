import { TitlePage } from "@/modules/shared";
import { CategoryTable } from "@/modules/categories";

export default function CategoriesPage() {
    return (
        <>
            <TitlePage
                btnPath="/categories/new"
                btnTitle="Agregar categoria"
                description="Listado de categories para tus productos"
                title="Categorias"
            />

            <CategoryTable/>


        </>
    );
}