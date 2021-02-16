import React from 'react';

const CardFilter = () => {
	return (
		<div class="card-filter">
			<div class="card border-dark mb-3 text-left">
				<div class="card-header font-weight-bold">FILTER</div>
				<div class="card-body text-primary">
					<div class="select-item1 mb-4">
						<select class="form-select" aria-label="Default select example">
							<option selected>KISARAN HARGA</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
					<div class="select-item2 mb-4">
						<select class="form-select" aria-label="Default select example">
							<option selected>MEREK MOBIL</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
					<div class="select-item3 mb-4">
						<select class="form-select" aria-label="Default select example">
							<option selected>MODEL MOBIL</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
					<div class="select-item4 mb-4">
						<select class="form-select" aria-label="Default select example">
							<option selected>TRANSMISI</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
					<div class="select-item5 mb-4">
						<select class="form-select" aria-label="Default select example">
							<option selected>BAHAN BAKAR</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
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
