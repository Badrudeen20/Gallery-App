import React from 'react'
import './Modal.scss'
export default function Modal({selectedHandler,setSelectedHandler}) {
    const handlerClick = (e)=>{
         if(e.target.classList.contains('back')){
              setSelectedHandler(null)
         }
    }
    return (
        <>
            <div className="back" onClick={handlerClick}>
                <div className="selectedImage">
                    <img src={selectedHandler} />
                </div>
            </div>
        </>
    )
}
