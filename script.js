const request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?qty=2&order=name');

request.onload = function() {
    const parsedData = JSON.parse(request.response);
    console.log(parsedData);

    for(item in parsedData) {
        //Display all the product names
        const products = document.createElement('li');
        products.innerHTML = parsedData[item].name;
        document.body.appendChild(products);

        //Display all the product images
        const images = document.createElement('img');
        images.setAttribute('src', parsedData[item].image);
        document.body.appendChild(images);
    }
}

request.send();