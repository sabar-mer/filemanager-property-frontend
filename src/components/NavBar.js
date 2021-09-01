import React from 'react'

import imglogo from '../imglogo.svg'
function NavBar(props) {
    if(props.hide===false)
    return (
        <div className="flex place-content-between">
            
            <div className="flex  place-items-center">
            <img src={imglogo} width={100} height={50} alt="imglogo"/> 
                <p className="font-bold" style={{color:"#1E5F8E"}}>FileManager<br/>Property</p>
            </div>
    </div> 
    )
    else
    return (
        <div className="flex place-content-between"style={{display:"flex"}}>
            <div className="flex place-items-center">
               
               <img src={imglogo} width={100} height={100} alt="imglogo"/>
                <p className="font-bold" style={{color:"#1E5F8E"}}>FileManager<br/>Property</p>
            </div>
        </div>
    )

}
export default NavBar
