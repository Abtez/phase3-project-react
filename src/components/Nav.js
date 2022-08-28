import logo from "../assets/logo.png"

export default function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={logo} height="35" alt="" loading="lazy"
                    style={{marginTop: '-3px'}} />
            </a>
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="#intro">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/magazines">Magazines</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/new">Add Magazine</a>
                </li>
                </ul>

                <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="noreferrer"
                    target="_blank">
                    <i className="fab fa-youtube"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://www.facebook.com/mdbootstrap">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://twitter.com/MDBootstrap">
                    <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit">
                    <i className="fab fa-github"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}