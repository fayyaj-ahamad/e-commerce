import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
const Navbar = () =>{
    const item = useSelector((state)=> state.cart);   
    return(
        <>
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <Link to="/" className="navbar-brand">Faizu E-commerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/product" className="nav-link">Product</Link>
                </li>
                <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart
                    <span class="position-absolute  top-5 translate-middle badge rounded-pill bg-danger">
                    {item.cart.length}
                    </span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
</nav>
        </>
    )
}

export default Navbar;