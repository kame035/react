import React, {useState} from "react";
import './Modal.css'

export default function Modal({isOpen, onClose, children}) {
    // if (!isOpen) {
    //     return null
    // }

    if (!isOpen) return null

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className='modal-cont' onClick={(e) => e.stopPropagation()}>
                    <button className='modal-button' onClick={onClose}>&times;</button>
                    {children}
                </div>
            </div>
        </>
    )
}