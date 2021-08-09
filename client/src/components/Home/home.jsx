function Home() {
  let style = {
    width: "18rem",
    padding: "10px",
    margin: "10px",
  };
  let st = {
    width: "17%",
  };
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container mydiv">
        <div className="row">
          <div className="col-md-4">
            <div className="bbb_deals">
              <div className="bbb_deals_slider_container">
                <div className=" bbb_deals_item">
                  <div className="bbb_deals_image">
                    <img src="https://i.imgur.com/9UYzfny.png" alt="" />
                  </div>
                  <div className="bbb_deals_content">
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">HP Notebook</div>
                      <div className="bbb_deals_item_price ml-auto">
                        ₹25,550
                      </div>
                    </div>

                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_category">
                        <p className="text-justify">
                          Navbar navigation links build on our .nav options with
                          their own modifier class and require the use of
                          toggler classes for proper responsive styling.
                          Navigation in navbars will also grow to occupy as much
                          horizontal space as possible to keep your navbar
                          contents securely aligned.
                        </p>
                      </div>
                    </div>
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                      <div className="bbb_deals_item_price ml-auto">
                        <div>
                          <i className="fa fa-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <div className="available">
                <div className="available_line d-flex flex-row justify-content-start">
                  <div className="available_title">
                    Available: <span>6</span>
                  </div>
                  <div className="sold_stars ml-auto">
                    {" "}
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </div>
                </div>
                <div className="available_bar">
                  sdv
                  {/* <span style="width:17%"></span> *
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={style}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Home;
