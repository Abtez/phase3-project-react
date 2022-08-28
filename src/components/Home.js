import Footer from "./Footer";
import Magazine from "./Magazine";

export default function Home(){
    return(
        <>
        <div className="container-fluid mt-3">
          <section className="border-bottom pb-4 mb-5">
            <div className="row gx-5">
              <div className="col-md-8 mb-4">
                <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/slides/080.jpg" className="img-fluid" alt="welcome-img" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                  </a>
                </div>
              </div>
      
              <div className="col-md-4 mb-4">
                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day!</span>
                <h2><strong>Moringazine</strong></h2>
                <p className="text-muted">
                  Get access to top Moringa news and updates on real Time....
                </p>
                <button type="button" className="btn btn-primary btn-sm">New Magazine</button>
              </div>
            </div>
          </section>
        </div>
      
            <Magazine />
      
          <nav className="my-4" aria-label="...">
            <ul className="pagination pagination-circle justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#fdf" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#cxc">1</a></li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#fdf">2 <span className="sr-only">(current)</span></a>
              </li>
              <li className="page-item"><a className="page-link" href="#fdff">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#ff">Next</a>
              </li>
            </ul>
          </nav>
      
          <Footer />
        </>
    )
}