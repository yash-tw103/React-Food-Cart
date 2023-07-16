import React from "react";

const CartData = ({menuData}) =>{


    
    console.log(menuData);
        return(<>
        <div className="container" style={{display: "flex" , flexWrap : "wrap" ,justifyContent:"space-between" , gap:"2rem" , textAlign:"center" }} >
            { menuData.map((currElement)=>{

            return(
                <>
        <div className="card" style={{width: '20rem'}} key={currElement.id}>
                <img src={currElement.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{currElement.name}</h3>
                        <h6>{currElement.cateogry}</h6>
                        <hr />
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-warning">order Now</a>
                    </div>
            </div>
            </>
            )
            })}
        </div>
        </>)
    
}

export default CartData;