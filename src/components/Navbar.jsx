import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Navbar = () => {
   const navcart = useSelector((state)=>state.Cart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">Bohemian</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="arrival">Accessories</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" to="fashion">Fashion + Beauty</Link>
                            </li>

                            <li class="nav-item">
                                <Link className="nav-link active" to='homeware'>Homeware</Link>
                            </li>

                            
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn ">Login</a>
                        
                       
                            <a href="" className="btn ">Sign Up</a>
                       
                        
                            <Link to="/cart" className="btn ">cart: ({navcart.length})</Link>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}