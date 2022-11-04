import React from 'react'

export default function ProductItem({ item, setCurrentShoe }) {
    return (
        <div className='card' style={{ width: '100%' }}>
            <img className='card-img-top' src={item.image} alt={item.name} />
            <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className="card-text">{`${item.price}$`}</p>
                <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-secondary"
                    onClick={() => { setCurrentShoe(item) }}
                >
                    Add to card
                </button>
            </div>
        </div>
    )
}
