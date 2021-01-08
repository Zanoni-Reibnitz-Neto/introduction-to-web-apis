const request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');

request.onload = function() {
    console.log(JSON.parse(request.response));
};

request.send();
