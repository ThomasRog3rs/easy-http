const http = new EasyHTTP();

// Get Users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log(res))
  .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
};

// Create User
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Update Post
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Delete User
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(res => console.log(res))
  .catch(err => console.log(err));
