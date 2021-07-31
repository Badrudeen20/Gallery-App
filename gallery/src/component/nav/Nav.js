import React, { useState } from 'react'
import './Nav.scss'

export default function Nav() {
    const [menu,setMenu] = useState(false)
    return (
        <>
                <nav>
                   <div className="burger"><i className="fi-rr-menu-burger" onClick={()=>setMenu(!menu)}></i></div>
                    <div>Gallary</div>

                    <ul className={`${menu ? 'active':''}`}>
                        <li><i class="fi-rr-home"></i><span>Home</span></li>
                        <li className="active"><i class="fi-rr-search"></i></li>
                        <li className="active" for="upload"><i class="fi-rr-plus"></i></li>
                        <li><i class="fi-rr-info"></i><span>About</span></li>
                        <li><i class="fi-rr-comment"></i><span>Contact</span></li>
                    </ul> 
                    <div className="auth"><span>Logout</span></div>
                </nav>
        </>
    )
}

