import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ data, setCurrentShoe }) {
    return (
        <div className='row'>
            {
                data.map(shoe => {
                    return (
                        <div className='col-lg-4' style={{ marginBotton: '1rem' }}>
                            <ProductItem key={shoe.id} item={shoe} setCurrentShoe={setCurrentShoe} />
                        </div>
                    )
                })
            }
        </div>
    )
}
