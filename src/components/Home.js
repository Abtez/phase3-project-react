import Footer from "./Footer";
import Magazine from "./Magazine";
import hero from "../assets/hero.png"

export default function Home({magazines}){
    return(
        <>
        <div className="">
          <section className="border-bottom pb-4 mb-5">
            <div className="row gx-5">
              <div className="col-md-12 mb-4">
                <div className="" >
                  <img src={hero} className="img-fluid hero-img" alt="welcome-img" />
                  <a href="#!">
                  </a>
                </div>
              </div>
{/* 
            https://mdbcdn.b-cdn.net/img/new/avatars/2.webp
              <div className="col-md-4 mt-5">
                <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day!</span>
                <h2><strong>Moringazine</strong></h2>
                <p className="text-muted">
                  Get access to top Moringa news and updates on real Time....
                </p>
                <button type="button" className="btn btn-primary btn-sm">New Magazine</button>
              </div>
*/}

            </div>
          </section>
        </div>

  

        <div className="container">
            <div className="row gx-lg-5">
        
                {magazines.map(mag => {
                    return <Magazine key={mag.id} title={mag.title} description={mag.description} category={mag.category}
                    date={mag.created_at} image={mag.image} user={mag.user_id} />
                })}

            </div>
        </div>
      
          <nav className="my-4" aria-label="...">
            <ul className="pagination pagination-circle justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#fdf" tabIndex={-1} aria-disabled="true">Previous</a>
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