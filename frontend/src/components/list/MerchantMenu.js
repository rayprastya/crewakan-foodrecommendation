import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function MerchantMenu({ menu }) {

	return (
    <div className="container my-3">
      <div className="row g-1">
        {menu?.map((row, index) => (
		<div className="col-lg-3 col-md-4 col-6" key={index}>
			<div className="card m-0">
				<img src={'https://via.placeholder.com/150'} className='card-img-top' alt={row.name}/>
				<div className="d-flex flex-column card-body">
					<p className="fw-semibold my-0">{row.name}</p>
					<div className="" style={{fontSize:'14px', minHeight:'42px'}}>{row.description.length >= 60 ? row.description.substring(0,60)+'...' : row.description}</div>
					<div className="d-flex gap-1 scrollx">
					{row.ingredients.map((ingredien, idx) => (
						<div className="bg-warning rounded px-2 text-white fw-bold my-0" key={idx} style={{fontSize: '11px'}}>{ingredien}</div>
					))}
					</div>
					<div className="text-success">Rp{parseFloat(row.price).toLocaleString()}</div>
					<div className="d-flex gap-2" style={{position:'absolute', top:'15px', right:'10px'}}>
						<a href='#' className="btn btn-danger rounded-pill"><FontAwesomeIcon  icon={'trash-alt'}/> </a>
						<a href='#' className="btn btn-primary rounded-pill"><FontAwesomeIcon icon={'pencil-alt'} /></a>
					</div>
					<div className="d-flex gap-2" style={{position:'absolute', top:'210px', right:'10px'}}>
						<a href='#' className="text-danger"><FontAwesomeIcon  icon={'heart'}/> </a>
						<span>{row.likes}</span>
					</div>
				</div>
			</div>
		</div>
		))}
			</div>
		</div>
	);
}