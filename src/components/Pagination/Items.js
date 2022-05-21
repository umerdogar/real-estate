import React, { useEffect, useState } from "react"

function Items({ currentItems }) {
	return (
		<>
			{currentItems &&
				currentItems.map((item) => (
					<div className="col-md-4 margin-top-15 margin-bottom-15">
						<div className="card">
							<img
								className="card-img"
								src="https://i.imgur.com/gazoShk.jpg"
								alt="Vans"
							/>
							<div className="card-img-overlay  " style={{ padding: "0rem" }}>
								<a
									href="#"
									className="btn-small btn-danger mt-3"
									style={{ display: "inline" }}
								>
									{" "}
									Super Hot
								</a>
							</div>
							<div className=" d-flex ">
								<a
									href="#"
									className="btn-small btn-danger "
									style={{ marginTop: "-33px" }}
								>
									{" "}
									<span className="">4</span> <i className="ri-camera-line"></i>
								</a>
							</div>
							<div className="card-img-overlay d-flex justify-content-end">
								<a href="#" className="card-link text-danger like">
									<i className="ri-heart-line"></i>
								</a>
							</div>
							<div className="text-center">
								<a href="#" className="btn-small btn-primary mt-3">
									{" "}
									Prime Location
								</a>
							</div>
							<div className="card-body">
								<h4 className="card-title">PKR 2.50 Crore</h4>
								<h6 className="card-subtitle mb-2 text-muted">I-8 Islamabad</h6>
								<ul className="list-inline margin-top-25">
									<li className="list-inline-item margin-right-5">
										<a>
											<i className="ri-hotel-bed-line"></i>
											<span className="margin-left-5 margin-right-15">
												4
											</span>{" "}
										</a>
									</li>
									<li className="list-inline-item margin-right-5">
										<a>
											<i className="ri-heavy-showers-line"></i>{" "}
											<span className="margin-left-5 margin-right-15">3</span>
										</a>
									</li>
									<li className="list-inline-item margin-right-5">
										<a>
											<i className="ri-fullscreen-fill"></i>
											<span className="margin-left-5 margin-right-15">
												5987 sqft
											</span>
										</a>
									</li>
								</ul>
								<div
									className="buy d-flex  align-items-center"
									style={{ justifyContent: "space-evenly" }}
								>
									<a href="#" className="btn-small btn-primary mt-3">
										{" "}
										Call
									</a>
									<a href="#" className="btn-small btn-primary mt-3">
										{" "}
										Email
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	)
}

export default Items
