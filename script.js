const request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?qty=2&order=name');

request.onload = function() {
    const parsedData = JSON.parse(request.response);
    console.log(parsedData);
    const products = document.createElement('li');
    products.innerHTML = parsedData[0].name;
    document.body.appendChild(products);
}

request.send();