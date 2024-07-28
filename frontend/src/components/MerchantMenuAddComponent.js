import React, {useState} from "react";


export default function MerchantMenuAddComponent() {
	const [formData, setFormData] = useState({
		name: '',
		merchant_id: 1,
		description: "",
		price: 0,
	});

	function handleEdit(e){
		e.preventDefault();
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	}

	function handleSubmit(e){
		e.preventDefault();
		const newFormData = {...formData, price: parseFloat(formData.price)};
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newFormData)
		})
			.then(res => {
				if(res.ok){
					window.location.reload();
				}
			})
	}

	return (
		<div>
			<form className="p-3">
				<div className="mb-3">
					<label htmlFor="name">Name</label>
					<input onChange={handleEdit} className="form-control" type="text" id="name" name="name"/>
				</div>
				<div className="mb-3">
					<label htmlFor="description">Description</label>
					<input onChange={handleEdit} className="form-control" type="text" id="description" name="description"/>
				</div>
				<div className="mb-3">
					<label htmlFor="price">Price</label>
					<input onChange={handleEdit} className="form-control" type="number" min={3000} id="price" name="price"/>
				</div>
				<button className="btn btn-primary" onClick={handleSubmit}>Submit new Product</button>
			</form>
		</div>
	)
}