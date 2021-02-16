import React from 'react';

const SearchFilter = () => {
	return (
		<div className="car-filter">
			<div className="row">
				<div className="col-4 my-auto text-left font-weight-bold">
					<div className="title">DAFTAR MOBIL</div>
				</div>
				<div className="col-4">
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>DKI JAKARTA</option>
							<option value="1">PADANG</option>
							<option value="2">JOGJA</option>
						</select>
					</div>
				</div>
				<div className="col-4">
					<div className="filter mb-3">
						<select className="form-select" aria-label="Default select example">
							<option selected>URUTKAN</option>
							<option value="1">One</option>
							<option value="2">Two</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchFilter;
