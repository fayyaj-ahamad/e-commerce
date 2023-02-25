import { useDispatch } from "react-redux";
import { add_to_cart } from "../store/cartSlice";
const Product = (props) =>{
    const {item} = props;
    const dispacth = useDispatch();
    const addToCart = ((item)=>{
        dispacth(add_to_cart(item));
        alert("Item Added");
    })
    return(
        <>
          <div className="card" style={{width: "200px"}} key={item.id}>
                <img src={item.image} className="card-img-top" alt="img"/>
                   <div className="card-body">
                    <p className="card-text">{item.category}</p>
                    <p className="card-text">Price :{item.price}</p>
                    <button className="btn btn-outline-primary" onClick={()=>addToCart(item)}>Add To Card</button>
                   </div>
           </div>
        </>
    )
}

export default Product;