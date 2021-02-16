import React from 'react';

const CardFilter = () => {
	return (
		<div className="car-filter">
			<div className="card text-left">
				<div className="card-header font-weight-bold">FILTER</div>
				<div className="card-body">
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>KISARAN HARGA</option>
							<option value="1">100.000.000</option>
							<option value="2">95.000.000</option>
						</select>
					</div>
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>MEREK MOBIL</option>
							<option value="1">CRV 15E CVT TURBO</option>
							<option value="2">AYLA 1.0 D MT</option>
							<option value="3">Three</option>
						</select>
					</div>
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>MODEL MOBIL</option>
							<option value="1">HONDA</option>
							<option value="2">TOYOTA</option>
						</select>
					</div>
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>TRANSMISI</option>
							<option value="1">MANUAL</option>
							<option value="2">MATIC</option>
						</select>
					</div>
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>BAHAN BAKAR</option>
							<option value="1">BENSIN</option>
							<option value="2">PERTAMAX</option>
						</select>
					</div>
					<button type="button" class="btn btn-block btn-info btn-sm">
						CARI MOBIL {'>'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardFilter;
