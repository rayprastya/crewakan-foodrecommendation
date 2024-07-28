export default function GetOrderList(merchant_id, setWishlist) {
	fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishlists/${merchant_id}`, {
		method: 'GET',
	})
		.then(res => res.json())
		.then(data => {
			setWishlist(data);
		})
}