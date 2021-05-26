import React from 'react'

const CategoryMenu = ({filterMenu, catItems}) => {
    return (
       <> 
<div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">

          { catItems.map((curc, index)=>{
              return <button className="btn btn-warning" key={index} onClick={()=>filterMenu(curc)}>{curc}</button>
          })} 
          
           
        </div>
            
        </div>
</>    )
}

export default CategoryMenu
