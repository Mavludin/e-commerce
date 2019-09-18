function newElement(productObj) {

	var clothes = document.getElementById('clothes');
	var accessories = document.getElementById('accessories');

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
	var text = document.createTextNode(productObj.name);
	heading.appendChild(text);
	par1.className = "desc";
	par2.className = "price";
	var par1Text = document.createTextNode(productObj.brand);
	var par2Text = document.createTextNode(productObj.price);
	par1.appendChild(par1Text);
	par2.appendChild(par2Text);

	figure.appendChild(cardLink);
	figure.appendChild(figcaption);
	figcaption.appendChild(heading);
	figcaption.appendChild(par1);
	figcaption.appendChild(par2);
	
	if (productObj.isAccessory === false) clothes.appendChild(figure);
	if (productObj.isAccessory === true) accessories.appendChild(figure);
}

function getData() {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var productObj = JSON.parse (this.responseText);
				for (var i=0; i<productObj.length; i++) {
					newElement(productObj[i]);
				}
			} else console.log ('Call failed');
		}
	}

	http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
	http.send();	
}

getData();