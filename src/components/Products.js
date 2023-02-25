import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
const Products = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fethProduct = async() =>{
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data);
        setLoading(false);
    }
    useEffect(()=>{
        fethProduct();
    },[]);
    return(
        <>
        {loading ? <h2 style={{textAlign:"center",marginTop:"50px"}}>Loading.....</h2>:
        <div className="container">
        <div className="row">
                {
                    products.map( item=> <Product item={item} key={item.id}/>)
                }
            </div>
        </div>}
        
        </>
    )
}
export default Products;