import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import MerchantMenu from "@/components/list/MerchantMenu";
import menu from "@/data/merchantmenu";
import Link from 'next/link'
import store from '@/data/store';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function MerchantMenuView() {
	const [merchantMenu, setMerchantMenu] = useState(null);

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus/1`,
			{method: 'GET',}
		)
			.then(res => res.json())
			.then(data => {
				setMerchantMenu(data);
			})
	}, [])

	return (
		<main>
			<Sidebar/>
			<Topbar />
			<div className="content">
				<div className="row g-1">
					<div className="col-md-4 text-center card py-3">
						<img src={store.img} style={{width:'300px', height:'300px', objectFit:'cover', borderRadius:'50%', margin:'0 auto'}} alt="" />
						<h4 className='mt-2'>{store.name}</h4>
						<p>{store.desc}</p>
						<div className="w-100">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.766919833568!2d106.78211377527084!3d-6.294332261606025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1459c0783e7%3A0x2a7c89b9fce0bb90!2sSouth%20Quarter!5e0!3m2!1sid!2sid!4v1722123033229!5m2!1sid!2sid" width="100%" height="300" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
					<div className="col-md-8">
						<div className="h-100 card">
							<div className="d-flex justify-content-between mt-3 px-3">
								<div>
									<h5>Merchant Menu</h5>
									<h6 className="w-100 d-block">Product that's sold on your merchant profile</h6>
								</div>
								<Link href="/merchant/add" className="text-decoration-none align-self-center">Add new product</Link>
							</div>
							<hr/>
							<MerchantMenu menu={menu}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
