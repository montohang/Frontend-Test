import React from 'react';
import { GiSteeringWheel, ImCalculator, GoLaw, FcLike } from 'react-icons/all';
import { DataCar } from '../variables/DataCar';

const CardList = () => {
	return (
		<div class="row mt-4 mb-2">
			{DataCar.map((data) => (
				<div class="col-12 mb-5 col-md-6 col-lg-4">
					<div class="card">
						<div class="love">
							<h4>
								<FcLike />
							</h4>
						</div>
						<div class="row">
							<div class="col-6 col-md-12 col-lg-12 mx-auto my-auto">
								<img src={data.image} class="card-img-top" alt="..." />
							</div>

							<div class="col-6 col-md-12 col-lg-12">
								<div class="card-body">
									<div class="row price-store">
										<div class="col-6">
											<span class="price badge bg-dark">{data.price}</span>
										</div>
										<div class="col-6 my-auto">
											<span class="outlet">{data.outlet}</span>
										</div>
									</div>
									<div class="bottom-card">
										<div class="title">
											<p class="font-weight-bold text-left">{data.name}</p>
										</div>
										<div class="subtitle">
											<p class="text-left">{data.subname}</p>
										</div>
									</div>
									<div class="list-item">
										<ul class="list text-left align-content-lg-start">
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
									<div class="row price-tablet">
										<div class="col-12">
											<span class="price badge bg-dark">{data.price}</span>
										</div>
										<div class="col-12 my-auto">
											<span class="outlet">{data.outlet}</span>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12">
								<hr />
								<div class="desc">
									<p class="text-left">
										{' '}
										<span class="font-weight-bold">Angsuran mulai dari </span>{' '}
										<span class="pricemonth">{data.angsuran}/Bulan</span> Menggunakan Simulasi
										Kredit KKB BCA
									</p>
								</div>
								<div class="row">
									<div class="col-4 p-0">
										<div class="card bot">
											<div class="card-body">
												<h3>
													<GiSteeringWheel />
												</h3>
												<p class="card-text font-weight-light">TEST DRIVE</p>
											</div>
										</div>
									</div>
									<div class="col-4 p-0">
										<div class="card bot">
											<div class="card-body">
												<h3>
													<ImCalculator />
												</h3>
												<p class="card-text font-weight-light">MINTA PENAWARAN</p>
											</div>
										</div>
									</div>
									<div class="col-4 p-0">
										<div class="card bot">
											<div class="card-body">
												<h3>
													<GoLaw />
												</h3>
												<p class="card-text font-weight-light">BANDINGKAN KENDARAAN</p>
											</div>
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
