const request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?qty=2&order=name');

request.onload = function() {
    const response = request.response;
    const parsedData = JSON.parse(response);
    console.log(parsedData);
    const description = parsedData[0].description;
    console.log(description);
}

request.send();