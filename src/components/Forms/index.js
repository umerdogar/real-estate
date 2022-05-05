import React from "react";
import Logo from "../../assets/logo.png";
import ProfileIcon from "../../assets/profile-icon.png";
import Footer from "../Footer";




const Form = () => {
  return (
    <>
      <div>
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
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="index.html">
                        Plot
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="index.html">
                        Commercial
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="index.html">
                        Rent
                      </a>
                    </li>

                    <li className="nav-item">
                      <img
                        className=" "
                        style={{ maxWidth: "150%" }}
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
      </div>

      <div className="div">
        {/* <!-- Container Start --> */}
        <div className="container">
          <div className="row">
            {/* <!-- Left sidebar --> */}
            <div className="col-md-12">
              <div className="product-details">
                <div className="">
                  <div className="">
                    <div className="margin-top-15">
                      <h3 className="tab-title">Add Property</h3>
                      <div className="bg-blue padding-15">
                        <h6 style={{ color: "white", margin: "0px" }}>
                          Property Type
                        </h6>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "7px" }}>Property Purpose</p>
                        </div>
                        <div className="col-md-2 col-4 margin-bottom-5">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Buy</label>
                          </div>
                        </div>
                        <div className="col-md-2 col-4">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Sell </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "7px" }}>Featured Property</p>
                        </div>
                        <div className="col-md-2 col-4 margin-bottom-5">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Hot </label>
                          </div>
                        </div>
                        <div className="col-md-2 col-4">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Super Hot </label>
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: "10px" }}>
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "7px" }}> Property Type</p>
                        </div>
                        <div className="col-md-7 col-9 margin-bottom-5">
                          <div className="row">
                            <div className="col-md-2 col-3 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">Plot </label>
                              </div>
                            </div>

                            <div className="col-md-3 col-5 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">Commercial </label>
                              </div>
                            </div>
                            <div className="col-md-3 col-5 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">Farm House</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{ marginBottom: "10px" }}>
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>
                            {" "}
                            Property Sub Type
                          </p>
                        </div>
                        <div className="col-md-7 col-9 margin-bottom-5">
                          <div
                            className="row"
                            style={{ marginTop: "10px", marginBottom: "10px" }}
                          >
                            <div className="col-md-2 col-3 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">File </label>
                              </div>
                            </div>

                            <div className="col-md-3 col-5 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">Commercial </label>
                              </div>
                            </div>
                            <div className="col-md-3 col-5 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">Resident</label>
                              </div>
                            </div>
                            <div className="col-md-3 col-5 margin-bottom-5">
                              <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                                <input
                                  type="checkbox"
                                  id="444"
                                  name="checkbox"
                                  checked=""
                                />
                                <label for="444">Agricultural</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue padding-15">
                        <h6 style={{ color: "white", margin: "0px" }}>
                          Property Location
                        </h6>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Society </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Phase </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Block </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Sector </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Road</p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Street </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Property Number</p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "7px" }}>Property</p>
                        </div>
                        <div className="col-md-2 col-3 margin-bottom-5">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Pair</label>
                          </div>
                        </div>
                        <div className="col-md-2 col-3">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Tripl </label>
                          </div>
                        </div>
                        <div className="col-md-2 col-3">
                          <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                            <input
                              type="checkbox"
                              id="444"
                              name="checkbox"
                              checked=""
                            />
                            <label for="444">Tetra</label>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue padding-15">
                        <h6 style={{ color: "white", margin: "0px" }}>
                          Property Details
                        </h6>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Property Status </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <select className=" form-control p-2 w-100 my-2 border height-45">
                            <option>Active</option>
                            <option value="1">Inactive</option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Property Title </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-2 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>
                            Property Discreption{" "}
                          </p>
                        </div>
                        <div className="col-md-4 col-7 margin-bottom-5">
                          <input
                            type="text"
                            placeholder=""
                            className="border p-5 w-100 my-2"
                          />
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>Price </p>
                        </div>
                        <div className="col-md-4 col-9 margin-bottom-5">
                          <div className="filter-range">
                            <div className="filter-range-title">
                              <div className="">
                                <label className="min-price">
                                  <input
                                    className="slider-space1"
                                    type="number"
                                    name="min-price"
                                    value="0"
                                  />
                                </label>
                                <lable className="padding-left-15 ">to</lable>
                                <label className="max-price padding-left-15">
                                  <input
                                    className="slider-space1 align-self-center"
                                    type="number"
                                    name="max-price"
                                    value="0"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="row"
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        <div className="col-md-5 col-3  text-right">
                          <p style={{ marginTop: "15px" }}>
                            Property Size(Marla){" "}
                          </p>
                        </div>
                        <div className="col-md-4 col-9 margin-bottom-5">
                          <div className="filter-range">
                            <div className="filter-range-title">
                              <div className="">
                                <label className="min-price">
                                  <input
                                    className="slider-space1"
                                    type="number"
                                    name="min-price"
                                    value="0"
                                  />
                                </label>
                                <lable className="padding-left-15 ">to</lable>
                                <label className="max-price padding-left-15">
                                  <input
                                    className="slider-space1 align-self-center"
                                    type="number"
                                    name="max-price"
                                    value="0"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ marginBottom: "10px" }}>
                      <div className="col-md-5 col-3  text-right">
                        <p style={{ marginTop: "15px" }}> Property Sub Type</p>
                      </div>
                      <div className="col-md-7 col-9 margin-bottom-5">
                        <div
                          className="row"
                          style={{ marginTop: "10px", marginBottom: "10px" }}
                        >
                          <div className="col-md-2 col-3 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Gass </label>
                            </div>
                          </div>

                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Electricity</label>
                            </div>
                          </div>
                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Cornor</label>
                            </div>
                          </div>
                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Near Masjid</label>
                            </div>
                          </div>
                          <div className="col-md-2 col-3 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Lawn </label>
                            </div>
                          </div>

                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Near School</label>
                            </div>
                          </div>
                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Tv Lounge</label>
                            </div>
                          </div>
                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Near Market</label>
                            </div>
                          </div>
                          <div className="col-md-2 col-3 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Pool </label>
                            </div>
                          </div>

                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Balcony</label>
                            </div>
                          </div>
                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Kitchen</label>
                            </div>
                          </div>
                          <div className="col-md-3 col-5 margin-bottom-5">
                            <div className="checkbox-custom checkbox-inline1 checkbox-warning box-color">
                              <input
                                type="checkbox"
                                id="444"
                                name="checkbox"
                                checked=""
                              />
                              <label for="444">Near Park</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue padding-15">
                      <h6 style={{ color: "white", margin: "0px" }}>
                        Contact Information
                      </h6>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <div className="col-md-5 col-3  text-right">
                        <p style={{ marginTop: "15px" }}>Name </p>
                      </div>
                      <div className="col-md-4 col-7 margin-bottom-5">
                        <input
                          type="text"
                          placeholder=""
                          className="border p-2 w-100 my-2"
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <div className="col-md-5 col-3  text-right">
                        <p style={{ marginTop: "15px" }}>Email </p>
                      </div>
                      <div className="col-md-4 col-7 margin-bottom-5">
                        <input
                          type="text"
                          placeholder=""
                          className="border p-2 w-100 my-2"
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <div className="col-md-5 col-3  text-right">
                        <p style={{ marginTop: "15px" }}>Estate Name </p>
                      </div>
                      <div className="col-md-4 col-7 margin-bottom-5">
                        <input
                          type="text"
                          placeholder=""
                          className="border p-2 w-100 my-2"
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <div className="col-md-5 col-3  text-right">
                        <p style={{ marginTop: "15px" }}>Phone Number </p>
                      </div>
                      <div className="col-md-4 col-7 margin-bottom-5">
                        <input
                          type="text"
                          placeholder=""
                          className="border p-2 w-100 my-2"
                        />
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                      <div className="col-md-5 col-3  text-right">
                        <p style={{ marginTop: "15px" }}>
                          Optional Phone Number
                        </p>
                      </div>
                      <div className="col-md-4 col-7 margin-bottom-5">
                        <input
                          type="text"
                          placeholder=""
                          className="border p-2 w-100 my-2"
                        />
                      </div>
                    </div>

                    <div className="bg-blue padding-15">
                      <h6 style={{ color: "white", margin: "0px" }}>
                        Add Images
                      </h6>
                    </div>
                    <div
                      className="buy d-flex  align-items-center"
                      style={{
                        justifyContent: "space-evenly",
                        marginBottom: "15px",
                      }}
                    >
                      <a
                        href="#"
                        className="btn btn-primary mt-3"
                        style={{ backgroundColor: "rgb(18, 88, 134)" }}
                      >
                        {" "}
                        Add Images
                      </a>
                    </div>
                    <div className="bg-blue padding-15">
                      <h6 style={{ color: "white", margin: "0px" }}>
                        Add Videos
                      </h6>
                    </div>

                    <div
                      className="buy d-flex  align-items-center"
                      style={{ justifyContent: "space-evenly" }}
                    >
                      <a
                        href="#"
                        className="btn btn-primary mt-3"
                        style={{ backgroundColor: "rgb(18, 88, 134)" }}
                      >
                        {" "}
                        Add Videos
                      </a>
                    </div>
                  </div>

                  <div
                    className="buy d-flex  align-items-center margin-top-15 margin-bottom-15"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <a href="#" className="btn btn-primary mt-3 ">
                      {" "}
                      Add Property
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container End --> */}
      <Footer/>
    </>
  );
};

export default Form;
