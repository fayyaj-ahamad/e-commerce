import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove_to_cart, decrementQuantity, incrementQuantity} from "../store/cartSlice";
const Cart = () =>{
    const [total, setTotal] = useState(0);
    const product = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    const removeToCart = ((item)=>{
        dispatch(remove_to_cart(item));
        alert("Remove to Cart");
    })

    const decrement = ((item)=>{
        dispatch(decrementQuantity(item));
    })

    const increment = ((item)=>{
        dispatch(incrementQuantity(item));
    })

    const getTotal = (()=>{
        let price = 0;
        product.cart?.map((item)=>{
            price  = item.price.toFixed(2) * item.cartQuantity + price;
        })
        setTotal(price);
    })

    useEffect(()=>{
        getTotal();
    })
    return(
        <>
        <div className="container">
            <div className="row py-5">
            <div className="title">
                <h2 className="text-center">Shopping Cart</h2>
                
            </div>
            <hr/>
            {product.cart.length === 0?(
                <>
                    <p>Your Card is Empty</p>
                    <Link to="/">
                    <button className="btn btn-danger">Back To Shop</button>
                </Link>
                </>
                ):(
                    <>
                    {
                        product.cart?.map((item)=>{
                            return(
                                <>
                                <div className="conatiner" key={item.id}>
                                    <div className="row">
                                        <div className="col-md-3 align-center">
                                            <img src={item.image} alt="img" style={{width:"100px"}}/>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <div className="title">
                                                <h6>{item.title}</h6>
                                        </div>
                                            </div>
                                            <div className="col-md-2">
                                                <h6>Price : {item.price * item.cartQuantity}</h6>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="d-flex">
                                                <button className="btn btn-outline-danger me-2" onClick={item.cartQuantity<=1 ? ()=> removeToCart(item) : ()=> decrement(item)}>-</button>
                                                <h3 className="me-2">{item.cartQuantity}</h3>
                                                <button className="btn btn-outline-danger" onClick={() => increment(item)}>+</button>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn btn-danger" onClick={() =>removeToCart(item)}>Remove</button>
                                            </div>
                                            <hr/>
                                        
                                    </div>
                                </div>
                               
                                </>
                            )
                        })
                    }
                    <div className="container">
                        <div className="row">
                            <h3 className="text center">Total Ammount : {total.toFixed(2)}</h3>
                        </div>
                    </div>
                    </>
                )}
                
            </div>
        </div>
        </>
    )
}

export default Cart;