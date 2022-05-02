import React from "react";
import 'font-awesome/css/font-awesome.min.css'
// import "../../App.css";
import Logo from "../../assets/logo.png";
import ProfileIcon from "../../assets/profile-icon.png";
import building from "../../assets/building.png";
import Image1 from "../../assets/products/img-1.png"
import Image2 from "../../assets/products/img-2.png"
import Image3 from "../../assets/products/img-3.png"
import Image4 from "../../assets/products/img-4.png"
import Image11 from "../../assets/products/img11.png"
import PhoneIcon from "../../assets/products/phone-icon.png"
import Phone from "../../assets/products/phone.png"
import Email from "../../assets/products/email.png"
import Img12 from "../../assets/products/IMG12.png"
import App_Store from "../../assets/products/app-store_google-play.png"
import QR from "../../assets/products/qr.png"





const Home = () => {
  return (
    <>
      <section className=" bg-1  overly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light navigation">
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto main-nav ">
                    <li className="nav-item active">
                      <a className="nav-link1" href="index.html">
                        HOMES
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link1" href="index.html">
                        PLOTS
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link1" href="index.html">
                        COMERCIAL
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link1" href="index.html">
                        RENT
                      </a>
                    </li>
                  </ul>
                  <ul className="navbar-nav   mt-10">
                    <li className="nav-item">
                      <a className="nav-link text-white add-button" href="">
                        <i className="fa fa-plus-circle"></i>
                        Add Property
                      </a>
                    </li>
                    <li className="nav-item margin-left-5">
                      <img
                        className="profile-icon"
                        src={ProfileIcon}
                        alt="product-img"
                      />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- Header Contetnt --> */}
              <div className="content-block">
                <h3>Search Properties in your State</h3>
                <p>Find the best properties rates in your state</p>
              </div>
              {/* <!-- Advance Search --> */}
              <div className="advance-search">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 align-content-center">
                      <div className="container">
                        <ul className="nav nav-pills">
                          <li className="active">
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Sell</a>
                          </li>
                          <li>
                            <a href="#">Rent</a>
                          </li>
                        </ul>

                        <form>
                          <div className="form-row form-row-st">
                            <div className="form-group col-md-2 padding-top-5 border-right-2">
                              <label className="opacity-40">City</label>
                              <select className="w-100 form-control mt-lg-1 mt-md-2 no-border">
                                <option>Islamabad</option>
                                <option value="1">Rawalpindi</option>
                              </select>
                            </div>
                            <div className="form-group col-md-8 padding-top-5">
                              <label className="opacity-40">Location</label>
                              <input
                                type="text"
                                className="form-control my-2 my-lg-1 no-border"
                                id="inputtext4"
                                placeholder=""
                              />
                            </div>

                            <div className="form-group col-md-2 align-self-center">
                              <button type="submit" className="btn btn-primary">
                                Search Now
                              </button>
                            </div>
                          </div>
                        </form>
                        <div>
                          <div className="form-row ">
                            <div className="form-group col-md-2 form-row-st margin-right-5 padding-left-15 padding-bottom-10">
                              <label className="opacity-40">
                                Property Type
                              </label>
                              <select className="w-100 form-control mt-lg-1 mt-md-2 no-border">
                                <option>Home</option>
                                <option value="1">Building</option>
                              </select>
                            </div>
                            <div className="form-group col-md-4 form-row-st margin-right-5 padding-left-15 padding-bottom-10">
                              <label className="opacity-40">Price Range</label>
                              <div className="filter-range">
                                <div className="filter-range-title">
                                  <div className="price-controls">
                                    <label className="min-price">
                                      <input
                                        className="slider-space"
                                        type="number"
                                        name="min-price"
                                        value="0"
                                      />
                                    </label>
                                    <label className="padding-left-15 ">
                                      to
                                    </label>
                                    <label className="max-price padding-left-15">
                                      <input
                                        className="slider-space align-self-center"
                                        type="number"
                                        name="max-price"
                                        value="0"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-md-4 col-12 form-row-st margin-right-5 padding-left-15 padding-bottom-10">
                              <label className="opacity-40">Area (Marla)</label>
                              <div className="filter-range">
                                <div className="filter-range-title">
                                  <div className="price-controls">
                                    <label className="min-price">
                                      <input
                                        className="slider-space"
                                        type="number"
                                        name="min-price"
                                        value="0"
                                      />
                                    </label>
                                    <label className="padding-left-15 ">
                                      to
                                    </label>
                                    <label className="max-price padding-left-15">
                                      <input
                                        className="slider-space align-self-center"
                                        type="number"
                                        name="max-price"
                                        value="0"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-md-2 form-row-st  padding-left-15 padding-bottom-10">
                              <label className="opacity-40">Beds</label>
                              <select className="w-100 form-control mt-lg-1 mt-md-2 no-border">
                                <option>1</option>
                                <option value="1">2</option>
                              </select>
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
        </div>
      </section>


    <section className="popular-deals section ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>TITANIUM PROPERTY EXPERTS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container-fluid px-3 px-sm-5 my-5 text-center">
              <div className="owl-carousel owl-theme">
                <div className="item first prev">
                  <div className="">
                    <div className="row justify-content-center">
                      {" "}
                      <img
                        src="https://i.imgur.com/gazoShk.jpg"
                        className="img-fluid profile-pic mb-4 mt-3"
                      />{" "}
                    </div>
                    <h4 className="mb-3 mt-2">Marielle Haag</h4>
                    <div className="row active">
                      <div className="col-md-6 center ">
                        <img className="icon-size" src={building} />

                        <h6 className="mb-3 mt-2">Miller Real Estate</h6>
                      </div>
                      <div className="col-md-6 ">
                        <h6 className="mb-3 mt-2 padding-top-70">
                          +092-33842353
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item show">
                  <div className="">
                    <div className="row justify-content-center">
                      {" "}
                      <img
                        src="https://i.imgur.com/oW8Wpwi.jpg"
                        className="img-fluid profile-pic mb-4 mt-3"
                      />{" "}
                    </div>
                    <h4 className="mb-3 mt-2">Ximena Vegara</h4>
                    <div className="row diactive">
                      <div className="col-md-6 center ">
                        <img className="icon-size" src={building} />
                        <h6 className="mb-3 mt-2">Miller Real Estate</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="mb-3 mt-2 padding-top-70">
                          +092-33842353
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item next">
                  <div className="">
                    <div className="row justify-content-center">
                      {" "}
                      <img
                        src="https://i.imgur.com/ndQx2Rg.jpg"
                        className="img-fluid profile-pic mb-4 mt-3"
                      />{" "}
                    </div>
                    <h4 className="mb-3 mt-2">John Paul</h4>
                    <div className="row">
                      <div className="col-md-6 center">
                        <img className="icon-size" src={building} />
                        <h6 className="mb-3 mt-2">Miller Real Estate</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="mb-3 mt-2 padding-top-70">
                          +092-33842353
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item last">
                  <div className="">
                    <div className="row justify-content-center">
                      {" "}
                      <img
                        src="https://i.imgur.com/T5aOhwh.jpg"
                        className="img-fluid profile-pic mb-4 mt-3"
                      />{" "}
                    </div>
                    <h4 className="mb-3 mt-2">William Doe</h4>
                    <div className="row">
                      <div className="col-md-6 center">
                        <img className="icon-size" src="images/building.png" />
                        <h6 className="mb-3 mt-2">Miller Real Estate</h6>
                      </div>
                      <div className="col-md-6">
                        <h6 className="mb-3 mt-2 padding-top-70">
                          +092-33842353
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section className="popular-deals section ">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2>POPULAR CITIES</h2>

					</div>
				</div>
			</div>



			<div className="items">
				<div>
					<img className="card-img-top img-fluid " src={Image1} alt="Card image cap"/>
					<div className="second-txt">
						<span>Islamabad</span>
						<br/>
						<p>70 Properties</p>
					</div>
				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image2} alt="Card image cap"/>
					<div className="second-txt">
						<span>Karachi</span>
						<br/>
						<p>45 Properties</p>
					</div>
				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image3} alt="Card image cap"/>
					<div className="second-txt">
						<span>Lahore</span>
						<br/>
						<p>90 Properties</p>
					</div>
				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image4} alt="Card image cap"/>
					<div className="second-txt">
						<span>Islamabad</span>
						<br/>
						<p>70 Properties</p>
					</div>
				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image4} alt="Card image cap"/>
					<div className="second-txt">
						<span>Peshawar</span>
						<br/>
						<p>10 Properties</p>
					</div>
				</div>

			</div>
		</div>

	</section>
      

  <section className="popular-deals section ">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2>POPULAR CITIES</h2>

					</div>
				</div>
			</div>



			<div className="items">
				<div>
					<img className=" " src={Image11} alt="Card image cap"/>

				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image11} alt="Card image cap"/>

				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image11} alt="Card image cap"/>

				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image11} alt="Card image cap"/>

				</div>
				<div>
					<img className="card-img-top img-fluid " src={Image11} alt="Card image cap"/>

				</div>

			</div>
		</div>
	</section>

  <section className="margin-top-30">
		{/* <!-- Container Start --> */}
		<div className="container">
			<div className="row " style={{boxShadow: "0px 0px 9px rgb(0 0 0 / 11%)"}}>
				<div className="col-md-4 padding-top-50">
					<div className="content-holder">
          <h2 style={{color:"#14B5DB"}}>Get the Property App</h2>
						<p>Using our app, You can buy and rent property faster and more efficiently.</p>

					</div>
				</div>
				<div className="col-md-4">
					<div>
						<img className="card-img-top img-fluid " src={Img12} alt="Card image cap"/>

					</div>
				</div>
				<div className="col-lg-4 col-md-7 padding-top-50">

					<div className="download-btn d-flex my-3">
						<a href="#"><img src="images/products/app-store_google-play-.png" className="img-fluid" alt=""/></a>
						<a href="#" className=" ml-3"><img src={App_Store} className="img-fluid"
								alt=""/></a>
					</div>

					<div className="row margin-top-30">
						<div className="col-lg-6 col-md-4 margin-top-25">
							<p>Scan the QR code and get the app.</p>

						</div>
						<div className="col-md-6">
							<img className="card-img-top img-fluid " style={{width:"100px"}} src={QR}
								alt="Card image cap"/>


						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Container End --> */}
	</section>

  <footer className="footer section section-sm">
	{/* <!-- Container Start --> */}
	<div className="container">
		<div className="row">
			<div className="col-sm-3  col-6">

				<div className="block">
					<h4>CONTACT US</h4>
					<ul>
						<li>
							<div className="mobile d-flex">
								<a href="">
									{/* <!-- Icon --> */}
									<img src={PhoneIcon} alt="mobile-icon"/>
								</a>
								<span className="margin-left-25 footer-contact-us">Reference site about Lorem Ipsum,
									giving information on its origins, as well as a random Lipsum generator.</span>
							</div>
							<br/>
						</li>
            <li>
							<div className="mobile d-flex">
								<a href="">
									{/* <!-- Icon --> */}
									<img src={Phone} alt="mobile-icon"/>
								</a>
								<span
									className="margin-left-25 footer-contact-us">+902-829371-1203<br></br>+902-829371-1203</span>

							</div>
              <br/>
						</li>
            <li>
							<div className="mobile d-flex">
								<a href="">
									{/* <!-- Icon --> */}
									<img src={Email} alt="mobile-icon"/>
								</a>
								<span
									className="margin-left-25 footer-contact-us">info@gmail.com<br></br>info@gmail.com</span>

							</div><br/>
						</li>
					</ul>
			</div>
</div>
			{/* <!-- Link list --> */}
	

      <div className="col-sm-3  col-6 ">
				<div className="block">
					<h4>QUICK LINK</h4>
					<ul>
						<li><a href="#">About Us</a></li><br/>
						<li><a href="#">Contact Us</a></li><br/>
						<li><a href="#">Privacy Policy</a></li><br/>
						<li><a href="#">Support</a></li><br/>
						<li><a href="#">Terms & Conditions</a></li><br/>
					</ul>
				</div>
			</div>
			{/* <!-- Link list --> */}
		
      <div className="col-sm-3 col-6">
				<div className="block social-media-icons text-right">
					<h4>CITIES</h4>
					<ul className="footer-cities">
						<li><span>Karachi</span></li>
						<li><span>Lahore</span></li>
						<li><span>Multan</span></li>
						<li><span>Islamabad</span></li>
						<li><span>Sibi</span></li>
						<li><span>Mianwali</span></li>
						<li><span>Chakwal</span></li>
						<li><span>Skardu</span></li>
						<li><span>Gilgit</span></li>
						<li><span>Quetta</span></li>
						<li><span>Rawalpindi</span></li>
						<li><span>RYK</span></li>
						<li><span>DI Khan</span></li>
					</ul>
				</div>

			</div>
			{/* <!-- Promotion --> */}
      <div className="col-sm-3 col-6">
				<div className="block social-media-icons text-right">
					<h4>FOLLOW US</h4>
					<ul>
						<li className="footer-follow-us"><a className="fa fa-facebook" href="" target="_blank"></a>
						</li>
						<li className="footer-follow-us"><a className="fa fa-google" href="" target="_blank"></a>
						</li>
						<li className="footer-follow-us"><a className="fa fa-twitter" href="" target="_blank"></a></li>
					</ul>
				</div>

			</div>
	</div>
  </div>
	{/* <!-- Container End --> */}
</footer>

<footer className="footer-bottom">
	{/* <!-- Container Start --> */}
	<div className="container">
		<div className="row">
			<div className="col-sm-6 col-12">
				{/* <!-- Copyright --> */}
				<div className="copyright">
					<p>©
						{/* <script>
							var CurrentYear = new Date().getFullYear()
							document.write(CurrentYear)
						</script> All Rights Reserved, Created By Lorem ipsum</a> */}
					</p>
				</div>
			</div>

		</div>
	</div>
	{/* <!-- Container End -->
	<!-- To Top --> */}

</footer>
    </>
  );
};

export default Home;
