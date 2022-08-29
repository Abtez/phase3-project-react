export default function Magazine(props){
    return(
        <>   
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">  
          <div className="main mb-5">
            <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
              <img src={props.image ? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} 
              className="img-fluid mag-image" alt="welcome-img" />
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <a href="fsdf" className="text-info">
                  <i className="fas fa-random mx-2"></i>
                  {props.category}
                </a>
              </div>

              <div className="col-6 text-end">
                <u> {props.date}</u>
              </div>
            </div>

              <h5 className="text-capitalize">{props.title}</h5>

              <p className="mag-description">
              {props.description}
              </p>

            <hr />

              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-0"><strong>{props.user}</strong></p>
                  <p className="text-muted">
                    <small>Staff</small>
                  </p>
                </div>
              </div>
          </div>   
          </div>     
        </>
    )
}