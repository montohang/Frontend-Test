import React from 'react';
import { FaSdCard, AiOutlineCar } from 'react-icons/all';

const CardOption = () => {
	return (
		<div className="car-option mb-5">
			<div className="row">
				<div className="col-6">
					<div className="card">
						<div className="card-body p-1 text-center">
							<div className="option-icon">
								<FaSdCard />
							</div>
							<p>DAFTAR MOBIL</p>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card">
						<div className="card-body p-1 text-center">
							<div className="option-icon">
								<AiOutlineCar />
							</div>
							<p>PRODUK HERO</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardOption;
