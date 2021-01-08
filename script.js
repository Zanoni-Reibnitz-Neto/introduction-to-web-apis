const request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?' +
    'tag=squirrel&' +
    'rating=g&' +
    'api_key=ZsEyWb6yPClrya3ZgDUrQV1CNqfrpmAd'
);

request.onload = function() {
    const parsedData = JSON.parse(request.response);
    console.log(parsedData);
}

request.send();