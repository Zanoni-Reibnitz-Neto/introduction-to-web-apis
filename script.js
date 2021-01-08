const request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/product1');

request.onload = function () {
    const parsedData = JSON.parse(request.response);
    console.log(parsedData);
}

request.onerror = function () {
    console.log("There seems to be a problem!");
}

request.send();
