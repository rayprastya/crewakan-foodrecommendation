import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import MerchantMenuAddComponent from "@/components/MerchantMenuAddComponent";

export default function MerchantMenuAdd() {
	return (
		<main>
			<Sidebar/>
			<Topbar/>
			<div className="content d-flex flex-row">
				<div className="col-lg-12 h-100 card">
					<div className="d-flex justify-content-between mt-3 px-3">
						<div>
							<h5>Add New Product</h5>
            </div>
					</div>
					<hr/>
					<MerchantMenuAddComponent />
				</div>
			</div>
		</main>
	);
}