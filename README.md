# easyHTTP

## About

This is a simple JavaScript Libary to handle HTTP requests using the XHR object.

## Usage

To start using easyHttp you need to include it to your project and then instantiate the easyHTTP object:
const http = new easyHTTP();

### Get

Call the get method on your easyHTTP object. This takes two arguments:
http.get('endPoint', function(err, res){//your code})

### Post

Call the post method on your easyHTTP object. This takes three arguments:
http.get('endPoint', yourData, function(err, res){//your code})

### Put

Call the put method on your easyHTTP object. This takes three arguments:
http.get('endPoint', yourData, function(err, res){//your code})

### Delete

Call the delete method on your easyHTTP object. This takes two arguments:
http.get('endPoint', function(err, res){//your code})

## Future Impovements

I plan to refactor the code to use ES6 JavaScript.
