/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * Inspired by Brad Traversy
 *
 * @version 3.0.0
 * @author  Thomas Rogers
 * @license MIT
 *
 **/

class HttpAjax {
	//This function is to format the data in the correct content type
	async formatData(contentType, data){
		let formattedData;
		switch(contentType){
			case "application/json":
				formattedData = await data.json();
				break;
			case "text/xml":
				formattedData = await data.text();
				let parser = new DOMParser();
				formattedData = parser.parseFromString(formattedData, contentType);
				break;
			case "text/plain":
				formattedData = await data.text();
				break;
			default:
		}
		
		return formattedData;
	}
	
  	// Make an HTTP GET Request
  	async get(url, contentType = "application/json") {
    	const response = await fetch(url, {
      		method: 'GET',
      		headers: {
        		'Content-type': contentType
      		}
    	});
    	
    	const formatResponse = this.formatData(contentType, response);
    	return formatResponse;
  	}

  	// Make an HTTP POST Request
  	async post(url, data, contentType = "application/json") {
    	const response = await fetch(url, {
      		method: 'POST',
      		headers: {
        		'Content-type': contentType
      		},
      		body: JSON.stringify(data)
    	});

    	const formatResponse = this.formatData(contentType, response);
    	return formatResponse;
  	}

    // Make an HTTP PUT Request
  	async put(url, data, contentType = "application/json") {
	    const response = await fetch(url, {
	      method: 'PUT',
	      headers: {
	        'Content-type': contentType
	      },
	      body: JSON.stringify(data)
	    });
	
	    const formatResponse = this.formatData(contentType, response);
	    return formatResponse;
	}

   // Make an HTTP DELETE Request
   async delete(url, contentType = "application/json") {
      const response = await fetch(url, {
	      method: 'DELETE',
	      headers: {
	        'Content-type': contentType
	      }
	  });

	  const formatResponse = this.formatData(contentType, response);
	  return formatResponse;
   }
}
