import React from 'react'

const Menuitems = ({items}) => {//items receving as props
    return (
        <>
              <div className ="menu-items container-fluid mt-5">
            <div className="row">
            <div className="col-11 mx-auto">
                <div className="row my-5">

                {items.map((elem)=>{const{id, name,image,description,price}=elem;
                return(

<div className="item1 col-12 col-md-6 col-lg-6 col xl-4 my-5">
                        <div className="row Item-inside">
                        {/*for images*/}
                            <div className="col-12 col-md-12 col-lg-4 img-div">
                            <img src={image} alt={name} className="img-fluid"/>
                             </div>
                             {/*for items description */}
                             <div className="col-12 col-md-12 col-lg-8">
                                 <div className="main-title pt-4 pb-3">
                                     <h1>{name}</h1>
                                     <p>{description}</p>
                                 </div>
                                 <div className="menu-price-book">
                                     <div className="price-book-divide d-flex justify-content-between">{/*dflex keep side by side */}
                                         <h2>Price:${price}</h2>
                                         <a href="#">
                                             <button className="btn btn-primary">Order Now</button>
                                         </a>
                                     </div>
                                     <p>Price May very</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                )
                })}

                   
                </div>
            </div>

            </div>
        </div>
        </>
    )
}

export default Menuitems
