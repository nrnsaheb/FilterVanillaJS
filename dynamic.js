function fetchProducts() {
	fetch(`https://dummyjson.com/products`)
		.then((response) => response.json())
		.then((datas) => {
			var containers = document.getElementById('container');
			console.log(datas);
			let vav = datas.products;
			for (let i = 0; i < vav.length; i++) {
				// console.log(datas.products[i]);
				let cardContainer = document.createElement('div');
				let cardTitle = document.createElement('div');
				let cardBody = document.createElement('div');
				let image = document.createElement('img');
				let column = document.createElement('div');
				column.classList.add('col-md-4', 'my-4');
				cardContainer.classList.add('card', 'mx-2', 'my-2', 'h-100', 'shadow-md', 'shadow-md');
				cardTitle.classList.add('card-title', 'text-center', 'my-2');
				image.classList.add('card-image-top', 'mx-auto');
				image.style.width = '200px';
				image.style.src = '	200px';
				cardBody.classList.add('card-body', 'text-center');
				cardTitle.innerHTML = datas.products[i].title;
				cardBody.innerHTML = datas.products[i].description;
				image.src = datas.products[i].thumbnail;
				containers.appendChild(column);
				column.appendChild(cardContainer);
				cardContainer.appendChild(cardTitle);
				cardContainer.appendChild(image);
				cardContainer.appendChild(cardBody);

				// Button group?
				let span = document.createElement('span');
				span.classList.add('top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
				span.innerHTML = +datas.products[i].stock;
				let btnGrp = document.createElement('div');
				btnGrp.classList.add('"btn-group', 'mx-auto');
				let rating = document.createElement('button');
				rating.classList.add('btn', 'btn-success', 'mx-3', 'my-3');
				rating.innerHTML = '⭐' + datas.products[i].rating;
				let stock = document.createElement('button');
				stock.classList.add('btn', 'btn-secondary', 'mx-3', 'my-3');
				stock.innerHTML = 'Stock';
				let price = document.createElement('button');
				price.classList.add('btn', 'btn-info', 'mx-3', 'my-3');
				price.innerHTML = '$' + datas.products[i].price;
				stock.appendChild(span);
				btnGrp.appendChild(rating);
				btnGrp.appendChild(stock);
				btnGrp.appendChild(price);
				cardContainer.appendChild(btnGrp);
				let fetchProductsTwo = () => {
					fetch(`https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json`)
						.then((response) => response.json())
						.then((datasTwo) => {
							var containers = document.getElementById('container');
							// console.log(datasTwo);
							// console.log(datasTwo.length);
							// -2 to even data loading on the page
							for (let i = 0; i < datasTwo.length - 2; i++) {
								// console.log(i);
								// console.log(datasTwo[i].description);
								let cardContainer = document.createElement('div');
								let cardTitle = document.createElement('div');
								let cardBody = document.createElement('div');
								let image = document.createElement('img');
								let column = document.createElement('div');
								column.classList.add('col-md-4', 'my-4');
								cardContainer.classList.add('card', 'mx-3', 'my-3', 'h-100', 'shadow-md');
								cardTitle.classList.add('card-title', 'text-center', 'my-2');
								image.classList.add('card-image-top', 'mx-auto');
								image.style.width = '200px';
								image.style.src = '	200px';
								cardBody.classList.add('card-body', 'text-center');
								cardTitle.innerHTML = datasTwo[i].title;
								// console.log(datasTwo[i].title);
								cardBody.innerHTML = datasTwo[i].description;
								image.src = `https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/${i}.jpg`;
								containers.appendChild(column);
								column.appendChild(cardContainer);
								cardContainer.appendChild(cardTitle);
								cardContainer.appendChild(image);
								cardContainer.appendChild(cardBody);

								// Button group?
								let span = document.createElement('span');
								span.classList.add('top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
								span.innerHTML = datasTwo[i].width;
								let btnGrp = document.createElement('div');
								btnGrp.classList.add('btn-group', 'mx-auto');
								let rating = document.createElement('button');
								rating.classList.add('btn', 'btn-success', 'mx-3', 'my-3');
								rating.innerHTML = '⭐' + datasTwo[i].rating;
								let stock = document.createElement('button');
								stock.classList.add('btn', 'btn-secondary', 'mx-3', 'my-3');
								stock.innerHTML = 'Stock';
								let price = document.createElement('button');
								price.classList.add('btn', 'btn-info', 'mx-3', 'my-3');
								price.innerHTML = '$' + datasTwo[i].price;
								stock.appendChild(span);
								btnGrp.appendChild(rating);
								btnGrp.appendChild(stock);
								btnGrp.appendChild(price);
								cardContainer.appendChild(btnGrp);
							}
						});
				};
				fetchProductsTwo();
			}
		});
}
fetchProducts();

// function fetchProductsTwo() {
// 	fetch(`https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json`)
// 		.then((response) => response.json())
// .then((datasTwo) => {
// 	var containers = document.getElementById('container');
// 	// console.log(datasTwo);
// 	// console.log(datasTwo.length);
// 	// -2 to even data loading on the page
// 	for (let i = 0; i < datasTwo.length - 2; i++) {
// 		// console.log(i);
// 		// console.log(datasTwo[i].description);
// 		let cardContainer = document.createElement('div');
// 		let cardTitle = document.createElement('div');
// 		let cardBody = document.createElement('div');
// 		let image = document.createElement('img');
// 		let column = document.createElement('div');
// 		column.classList.add('col-md-4', 'my-4');
// 		cardContainer.classList.add('card', 'mx-3', 'my-3', 'h-100', 'shadow-md');
// 		cardTitle.classList.add('card-title', 'text-center', 'my-2');
// 		image.classList.add('card-image-top', 'mx-auto');
// 		image.style.width = '200px';
// 		image.style.src = '	200px';
// 		cardBody.classList.add('card-body', 'text-center');
// 		cardTitle.innerHTML = datasTwo[i].title;
// 		// console.log(datasTwo[i].title);
// 		cardBody.innerHTML = datasTwo[i].description;
// 		image.src = `https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/${i}.jpg`;
// 		containers.appendChild(column);
// 		column.appendChild(cardContainer);
// 		cardContainer.appendChild(cardTitle);
// 		cardContainer.appendChild(image);
// 		cardContainer.appendChild(cardBody);

// 		// Button group?
// 		let span = document.createElement('span');
// 		span.classList.add('top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
// 		span.innerHTML = datasTwo[i].width;
// 		let btnGrp = document.createElement('div');
// 		btnGrp.classList.add('btn-group', 'mx-auto');
// 		let rating = document.createElement('button');
// 		rating.classList.add('btn', 'btn-success', 'mx-3', 'my-3');
// 		rating.innerHTML = '⭐' + datasTwo[i].rating;
// 		let stock = document.createElement('button');
// 		stock.classList.add('btn', 'btn-secondary', 'mx-3', 'my-3');
// 		stock.innerHTML = 'Stock';
// 		let price = document.createElement('button');
// 		price.classList.add('btn', 'btn-info', 'mx-3', 'my-3');
// 		price.innerHTML = '$' + datasTwo[i].price;
// 		stock.appendChild(span);
// 		btnGrp.appendChild(rating);
// 		btnGrp.appendChild(stock);
// 		btnGrp.appendChild(price);
// 		cardContainer.appendChild(btnGrp);
// 	}
// });
// }

var containers = document.getElementById('container');
function paginated_fetch(
	url = `https://api.punkapi.com/v2/beers?`, // Improvised required argument in JS
	page = 1,
	previousResponse = []
) {
	return fetch(`${url}`) // Append the page number to the base URL
		.then((response) => response.json())
		.then((newResponse) => {
			// let span = document.createElement('span');
			// containers.appendChild(span);
			// span.innerHTML = newResponse[0].name;
			const response = [...previousResponse, ...newResponse]; // Combine the two arrays

			// document.write = response[0].name;
			if (newResponse.length !== 0) {
				page++;
				return paginated_fetch(url, page, response);
			}

			console.log(newResponse);
			return response;
		});
}
// paginated_fetch(`https://api.punkapi.com/v2/beers?`);

// Filter

let cards = document.getElementsByClassName('col-md-4');
let noProducts = document.getElementsByClassName('container');
let end = true;
console.log(cards);
function liveSearch() {
	let search_query = document.getElementById('searchbox').value;
	console.log(search_query);
	//Use innerText if all contents are visible
	//Use textContent for including hidden elements
	for (var i = 0; i < cards.length; i++) {
		// console.log(cards[i].innerText);
		if (cards[i].innerText.includes(search_query)) {
			// fetchProducts();

			cards[i].classList.remove('d-none');

			// cards[i].classList.add('col-md-12');
			// fetchProductsTwo();

			console.log('found');
		} else {
			cards[i].classList.add('d-none');
			end = false;
		}
	}
	if (!end) {
		console.log('end is false');
		let noProducts = document.getElementById('container');
		let noProductsCardContainer = document.createElement('div');
		let noProductsCard = document.createElement('div');
		let noProductsCardDiv = document.createElement('div');
		noProductsCardContainer.classList.add('container', 'text-center');
		noProductsCard.classList.add('w-100');
		noProductsCardDiv.classList.add('card-body', 'h1');
		noProductsCardDiv.innerText = 'Product Not Found';
		noProductsCardDiv.style.color = '#FCAC40';
		console.log('not found');
		noProductsCard.appendChild(noProductsCardDiv);
		noProductsCardContainer.appendChild(noProductsCard);
		noProducts.appendChild(noProductsCardContainer);
	} else if (end) {
		noProducts.classList.add('d-none');
	}
}

//A little delay
let typingTimer;
let typeInterval = 800;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(liveSearch, typeInterval);
});
