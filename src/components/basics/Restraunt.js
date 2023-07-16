import { useState } from "react";
import Meals from "./myApi";
import CartData from "./CartData";


const Restraunt = () => {
    const [menuData, setmenuData] = useState(Meals);
    const filter =(content) =>{
       const updatedList =  Meals.filter((item)=>{
            return ( item.cateogry === content );
        });

        setmenuData(updatedList);
    }
    return (
        <>
    <br /><br/>
        <nav>
        <div className="card" style={{width: '30rem' , display:'flex' ,flexDirection: "row", justifyContent:"space-evenly", margin :'auto'}}  >
                
        <button type="button" class="btn btn-light" onClick={()=> filter("Breakfast")}>Breakfast</button>
        <button type="button" class="btn btn-light" onClick={()=> filter("Lunch")}>Lunch</button>
        <button type="button" class="btn btn-light" onClick={()=> filter("Dinner")}>Dinner</button>
        <button type="button" class="btn btn-light" onClick={()=> setmenuData(Meals)}>All</button>
            </div>
        </nav><br /><br/><br/>
            
        <CartData menuData={menuData} />
        
        </>
    )
}

export default Restraunt;