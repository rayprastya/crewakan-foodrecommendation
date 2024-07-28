import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function GetRecommendationsByMerchant(merchant_id, existingMenu, setMenu, setRec) {
	const fullRec = [];

	fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus/${merchant_id}`,
		{method: 'GET',}
	)
		.then(res => res.json())
		.then(data => {
			const menu = [...new Set(data.map(item => item.name))];
			setMenu(menu);
			const menuStr = menu.join(', ').toLowerCase();

			fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-list-menu`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json',},
				body: JSON.stringify({content: menuStr})
				})
				.then(res => res.json())
				.then(listMenu => {
					const foodList = listMenu.foodList.recommendation;
					foodList.map(value => {
						const fullDict = {
							merchant_id: 1,
							name: value,
							image: 'https://via.placeholder.com/150'
						};

						fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-recipe`, {
							method: 'POST',
							headers: { 'Content-Type': 'application/json',},
							body: JSON.stringify({content: value})
						})
							.then(res => res.json())
							.then(data => {
								fullDict.recipes = data.summary.ingredients;
								fullDict.steps = data.summary.steps;
							})

						fullRec.push(fullDict);
					console.log('fullRec', fullRec);
					setRec(fullRec);
					})
				})

		})

}