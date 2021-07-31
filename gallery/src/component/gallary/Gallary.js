import React from 'react'
import {motion} from 'framer-motion'
import './Gallary.scss'

import Firestore from '../../hooks/Firestore'

export default function Gallary({setSelectedHandler}) {
    const {docs}  = Firestore('images')
  
    return (
        <>
            <div className="gallary">
                     <ul className="image">
                         {docs && docs.map(doc=>(
                            <motion.li key={doc.id} 
                            layout
                            whileHover={{opacity:1}}
                            className="imgList"
                            onClick={()=>setSelectedHandler(doc.url)}>
                               <img src={doc.url} alt="upload_image" /> 
                            </motion.li>
                         ))}                        
                     </ul>
                </div>
        </>
    )
}


