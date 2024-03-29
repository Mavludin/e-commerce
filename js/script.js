const newElement = productObj => {

	var clothes = document.getElementById('clothes');
	var accessories = document.getElementById('accessories');

	if (productObj.preview.match('.jpg')) {

		var figure = document.createElement('figure');
		var cardLink = document.createElement('a');
		var image = document.createElement('img');
		var figcaption = document.createElement('figcaption');
		var heading = document.createElement('h4');
		var par1 = document.createElement('p');
		var par2 = document.createElement('p');

		image.src = productObj.preview;
		cardLink.href = "details.html?product-id=" + productObj.id;
		cardLink.appendChild(image);
		heading.innerHTML = productObj.name;
		par1.className = "desc";
		par2.className = "price";
		par1.innerHTML = productObj.brand;
		par2.innerHTML = productObj.price;

		figure.appendChild(cardLink);
		figure.appendChild(figcaption);
		figcaption.appendChild(heading);
		figcaption.appendChild(par1);
		figcaption.appendChild(par2);

		if (productObj.isAccessory === false) clothes.appendChild(figure);
		if (productObj.isAccessory === true) accessories.appendChild(figure);
	}
};

const getData = () => {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var productObj = JSON.parse (this.responseText);
					productObj.map (item => {
						newElement(item);
					});
			} else console.log ('Call failed');
		}
	};

	http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
	http.send();	
};

getData();