import logo from "../assets/logo.png"
import {Link} from "react-router-dom"

export default function Nav({loggedIn, isLoggedOut}){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={logo} height="45" alt="" loading="lazy"
                    style={{marginTop: '-3px'}} />
            </Link>
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" aria-current="page" to="/">
                    <i className="fas fa-home"> Home</i>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/new-magazine">
                    <i className="fas fa-pen-alt">Add Magazine</i>
                    </Link>
                </li>
                </ul>

                {currentUser ?
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-lg-0">
                            <i className="far fa-user-circle"> {currentUser.name}</i>
                        </li>

                        <li onClick={isLoggedOut} className="nav-item me-3 me-lg-0 mx-3">
                            <i className="fas fa-sign-out-alt"> Logout</i>
                        </li>
                    </ul>

                     : 
                     
                     <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-lg-0">
                            <Link className="nav-link" to="/register">
                            <i className="fas fa-user-plus"> Register</i>
                            </Link>
                        </li>

                        <li className="nav-item me-3 me-lg-0">
                            <Link className="nav-link" to="/login">
                            <i className="fas fa-sign-in-alt"> Login</i>
                            </Link>
                        </li>  
                     </ul>
                    }             
               
            </div>
            </div>
        </nav>
        </>
    )
}