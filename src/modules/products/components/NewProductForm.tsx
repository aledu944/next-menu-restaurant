'use client'

import { FormEvent, useState } from "react"


export const NewProductForm = () => {


    const [image, setImage] = useState('');


    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        setImage(URL.createObjectURL(file))
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { productName, description, stock, categoryId, image } = e.target as HTMLFormElement;

        const formData = new FormData();

        // TODO?: Add values to formData

        
    }

    return (
        <section className='product-form'>
            <form onSubmit={handleSubmit} className='space-y-4'>

                <div className='form-group'>
                    <input
                        name='productName'
                        type="text"
                        placeholder='Nombre del producto'
                    />
                </div>

                <div className='form-group'>
                    <input
                        name='description'
                        type="text"
                        placeholder='Descripcion del producto'
                    />
                </div>

                <div className='form-group'>
                    <input
                        name='stock'
                        type="text"
                        placeholder='Stock disponible'
                    />
                </div>

                <select className='form-select' name="categoryId">
                    <option value="">Categoria</option>
                </select>

                <div>
                    <img className="max-w-[100px]" src={image} />

                    <input
                        onChange={handleImage}
                        name='image'
                        type="file"
                    />

                </div>
                <button type="submit" className='btn-primary'>Guardar producto</button>

            </form>
        </section>
    )
}
