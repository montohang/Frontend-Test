import React from 'react';
import { GiSteeringWheel, ImCalculator, GoLaw, FcLike } from 'react-icons/all';

const CardList = () => {
	return (
		<div class="row mt-4 mb-4">
			<div class="col-4">
				<div class="card">
					<div class="love">
						<h4>
							<FcLike />
						</h4>
					</div>
					<img
						src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<div class="row">
							<div class="col-6">
								<span class="price badge bg-dark">100.000.000</span>
							</div>
							<div class="col-6 my-auto">
								<span class="outlet">OTR DKI Jakarta</span>
							</div>
						</div>
						<div class="bottom-card">
							<div class="title">
								<p class="font-weight-bold text-left">HONDA</p>
							</div>
							<div class="subtitle">
								<p class="text-left">ALL NEW CRV 15E CVT TURBO PRESTIGE</p>
							</div>
						</div>
						<div class="list-item">
							<ul class="list text-left align-content-lg-start">
								<li>
									<span>1200cc</span>
								</li>
								<li>
									<span>Manual</span>
								</li>
								<li>
									<span>Bensin</span>
								</li>
							</ul>
						</div>
						<hr />
						<div class="desc">
							<p class="text-left">
								{' '}
								<span class="font-weight-bold">Angsuran mulai dari </span>{' '}
								<span class="pricemonth">2.742.000/Bulan</span> Menggunakan Simulasi Kredit KKB BCA
							</p>
						</div>
						<div class="row">
							<div class="col-4 p-0">
								<div class="card">
									<div class="card-body">
										<h3>
											<GiSteeringWheel />
										</h3>
										<p class="card-text font-weight-light">TEST DRIVE</p>
									</div>
								</div>
							</div>
							<div class="col-4 p-0">
								<div class="card">
									<div class="card-body">
										<h3>
											<ImCalculator />
										</h3>
										<p class="card-text font-weight-light">TEST DRIVE</p>
									</div>
								</div>
							</div>
							<div class="col-4 p-0">
								<div class="card">
									<div class="card-body">
										<h3>
											<GoLaw />
										</h3>
										<p class="card-text font-weight-light">TEST DRIVE</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-4" />
			<div class="col-4" />
		</div>
	);
};

export default CardList;
