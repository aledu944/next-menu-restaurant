
import { ProductCard } from './ProductCard'

export const ProductList = () => {
    return (
        <section className='product-list'>
            {
                [0,1,3,4,5,6,7,8,9,10,11,12,13,14].map((product) => (
                    
                    <ProductCard
                        key={product}
                    />
                ))
            }


        </section>
    )
}
