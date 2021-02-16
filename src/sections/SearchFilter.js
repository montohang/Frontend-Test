import React from 'react';

const SearchFilter = () => {
	return (
		<div class="row">
			<div class="col">
				<h4>Daftar mobil</h4>
			</div>
			<div class="col">
				<select class="form-select" aria-label="Default select example">
					<option selected>DKI JAKARTA</option>
					<option value="1">PADANG</option>
					<option value="2">MEDAN</option>
					<option value="3">JOGJA</option>
				</select>
			</div>
			<div class="col">
				<select class="form-select" aria-label="Default select example">
					<option selected>URUTKAN</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
		</div>
	);
};

export default SearchFilter;
