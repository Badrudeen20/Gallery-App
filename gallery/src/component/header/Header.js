import React, { useState } from 'react'
import profile from './Profile/download.jpg'
import './Header.scss'
export default function Header(props) {
    const [error,setError] = useState(false)

    function changeHandler(e){
       
            const type = ['image/png','image/jpeg']
           
            const selected = e.target.files[0]
             if(selected && type.includes(selected.type)){
              props.handleFile(selected)
               
             }else{
                setError(true)
             }
             
           
    }
    return (
        <>
             <header>
                    <div className="detail">
                       <div className="img">
                           <img src={profile} />
                       </div>
                       <div className="name">
                           <div className="userName">Badruddin</div>
                           <div className="btn">
                               <button>Edit</button>
                               <form>
                                   <label class="file-upload-wrap" for="upload" >Upload</label>
                                   <input type="file" name="upload" id="upload" onChange={changeHandler} />
                               </form>
                           </div>
                       </div>
                    </div>
                   <div className="error">{error && "file not supported!"}</div>
                </header>
              
        </>
    )
}
