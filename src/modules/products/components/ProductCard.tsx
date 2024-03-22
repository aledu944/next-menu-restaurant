import Image from 'next/image'
import { LuShoppingCart } from 'react-icons/lu'

export const ProductCard = () => {

    const image = 'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <div className='product__card'>
            <div className='mb-4 space-y-2'>
                <Image
                    alt='nombre'
                    src={image}
                    width={200}
                    height={200}
                    className='w-full rounded-xl object-cover'
                />
                <h3 className='text-xl font-semibold text-center'>Nombre</h3>
                <p className='text-sm text-gray-600 line-clamp-2'>Descripcion del producto mejor si es corta asi no se desborda jaja</p>
            </div>

            <div className='flex items-center justify-between'>
                <p>Precio: <span className='font-semibold text-lg text-orange-600'>50,00$</span></p>
                <button className='btn-primary'>
                    <LuShoppingCart />
                </button>
            </div>
        </div>
    )
}
