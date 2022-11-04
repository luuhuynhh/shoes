import React from 'react'

export default function Modal({ currentShoe }) {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: '#545b6223' }}>
                            <h5 className="modal-title" id="exampleModalLabel">{`${currentShoe?.name} (${currentShoe?.alias})`}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ maxHeight: '300px' }}>
                            <img style={{ width: '100%', height: '350px', objectFit: 'cover' }} src={currentShoe.image} alt={currentShoe.name} />

                        </div>
                        <div className='modal-footer' style={{ backgroundColor: '#545b6223' }}>
                            <p><span style={{ fontWeight: 600 }}>Description: </span>{currentShoe.description}</p>
                            <span style={{ fontWeight: 600, borderLeft: '1.5px solid #333', paddingLeft: '.55rem' }}>
                                {`${currentShoe.price}$`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
