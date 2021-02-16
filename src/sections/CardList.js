import React from 'react';
import { GiSteeringWheel, AiOutlineCalculator, VscLaw, FcLike } from 'react-icons/all';
import { DataCar } from '../variables/DataCar';

const CardList = () => {
	return (
		<div className="row mt-3 mt-md-0 mt-lg-0">
			{DataCar.map((data) => (
				<div className="col-md-12 col-12 col-lg-4 mb-4">
					<div className="card px-3 py-3">
						<div className="row">
							<div className="col-6 col-md-12 col-lg-12 my-auto mx-auto">
								<img src={data.image} alt="" className="img-fluid" />
							</div>
							<div className="col-6 col-md-12 col-lg-12">
								<div className="desktop-price">
									<div className="row mb-3">
										<div className="col-8">
											<div className="car-price">
												<button className="btn btn-sm btn-block btn-dark">{data.price}</button>
											</div>
										</div>
										<div className="col-4 my-auto small">
											<div className="car-otr text-secondary">
												<span>{data.outlet}</span>
											</div>
										</div>
									</div>
								</div>
								<div className="car-title text-left font-weight-bold">{data.name}</div>
								<div className="car-description text-left">{data.subname}</div>
								<div className="car-specification text-secondary mb-5">
									<ul>
										<li>
											<span>{data.cc}</span>
										</li>
										<li>
											<span>{data.transmisi}</span>
										</li>
										<li>
											<span>{data.bahanBakar}</span>
										</li>
									</ul>
								</div>
								<div className="mobile-price mt-5">
									<div className="row mb-3">
										<div className="col-12 col-md-6 col-lg-6">
											<div className="car-price">
												<button className="btn btn-sm btn-block btn-dark">{data.price}</button>
											</div>
										</div>
										<div className="col-12 col-md-6 col-lg-6 my-auto small">
											<div className="car-otr text-secondary">
												<span>{data.outlet}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<hr />
						<div className="car-cicil text-center text-lg-left text-md-left font-weight-bold">
							Angsuran mulai dari <span className="text-info">{data.price}/Bulan</span>
						</div>
						<div className="car-cicil-scheme text-center text-lg-left text-md-left text-secondary mb-4">
							Menggunakan simulasi kredit <span className="font-weight-bold">{data.bank}</span>
						</div>
						<div className="car-action container">
							<div className="row">
								<div className="col-4 p-0">
									<div className="card">
										<div className="card-body p-1 text-center">
											<div className="action-icon">
												<GiSteeringWheel />
											</div>
											<p>Coba Test Drive</p>
										</div>
									</div>
								</div>
								<div className="col-4 p-0">
									<div className="card">
										<div className="card-body p-1 text-center">
											<div className="action-icon">
												<AiOutlineCalculator />
											</div>
											<p>Minta Penawaran</p>
										</div>
									</div>
								</div>
								<div className="col-4 p-0">
									<div className="card">
										<div className="card-body p-1 text-center">
											<div className="action-icon">
												<VscLaw />
											</div>
											<p>Bandingkan kendaraan</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardList;
