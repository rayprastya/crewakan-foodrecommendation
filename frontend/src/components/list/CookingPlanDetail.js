import React from 'react';

export default function CookingPlan({clickState}) {
	function addToMenuClicked(){
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({merchant_id: 1, name: clickState.name,description: "Placeholder Description", price: 25000})
		})
			.then(res => {
				if(res.ok){
					window.location.reload();
				}
			})
	}

	function deleteFromMenu(){
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishlists/${clickState.ID}`, {
			method: 'DELETE',
		})
			.then(res => {
				if(res.ok){
					window.location.reload();
				}
			})
	}

	return (
		<div className={`w-100 card p-2 custom-hover-bg`}>
			{clickState && <>
				<h5>{clickState.name}</h5>
				<div className=" card">
					<div className="btn-group mx-lg-5 my-lg-2">
						<div className="btn btn-primary btn-sm mx-sm-2" onClick={addToMenuClicked}>Add to Menu</div>
						<div className="btn btn-outline-primary btn-sm mx-sm-2" onClick={deleteFromMenu}>Remove from Plan</div>
					</div>
				</div>
				<div className="d-flex">
					<img src={'https://via.placeholder.com/150'} style={{height: '100px', width: '100px', borderRadius: '20px'}}
							 alt={clickState.name}/>
					<div className="ms-2 w-100">
						<div className="fw-bold">{clickState.recipes}</div>
						<div className="">{clickState.steps.split('|').map(value => (
							<span className="d-block">{value}</span>
						))}</div>
						<div className="d-flex w-100 justify-content-between">
							<div className="text-warning fw-bold align-self-center" style={{fontSize: '11px'}}>On Progress</div>
						</div>
						<div className="text-success">Rp. 20.000</div>
					</div>
				</div>
			</>
			}
		</div>
	)
}