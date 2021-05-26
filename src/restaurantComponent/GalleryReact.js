import React, { useState } from 'react'
import Menu from "../restaurantComponent/Menu";
import "../restaurantComponent/restaurant.css";
import CategoryMenu from './CategoryMenu';
import Menuitems from './Menuitems';

const allCatValues=[...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"all"];

const GalleryReact = () => {
    //*calling Menu Array 
    const [items, setItems]= useState(Menu);
    //to filtere certain value from menu such as category to indetify breakfast or lunch
    const[catItems, setCatItems]=useState(allCatValues);

    //to filter the button menu
    const filterMenu=(category)=>{
        if(category==="all"){
            setItems(Menu);
            return
        }
        const updatedItems =Menu.filter((curElem)=>{
            return curElem.category===category;
        })

        //to update once filtered
        setItems(updatedItems);
    }
    return (
        <>
        <h1 className="mt-5 text-center main-heading">Order your Favourite Dish</h1>
        <hr/>
        {/*menu list will come here*/}
        <CategoryMenu filterMenu={filterMenu} catItems={catItems}/>

        {/*My main item section */}
        {/*items is a props to send data to menuitems */}
      <Menuitems items={items}/>
        </>
    )
}

export default GalleryReact;
