const express = require('express');
const bodyParser = require('body-parser');
var usersJS = require('./users.js');
const serverJS = require('./server.js');

var app = express();
app.use(bodyParser.json());

app.get('/api/users', serverJS.readAll);
app.get('/api/users/:id', serverJS.findUserById);
app.get('/api/admins', serverJS.getAdmins);
app.get('/api/nonadmins', serverJS.getNonAdmins);
app.get('api/users', serverJS.getUsersByFavorite);
app.get('api/users', serverJS.getUsersByAgeLimit);
app.get('api/users', serverJS.findUserByQuery);

app.put('/api/users/:id', serverJS.postUsers);

app.post('/api/users', serverJS.postUser);

app.delete('/api/users/:id', serverJS.deleteUser);




app.listen(3005, function() {
  console.log('Node Assessment Listening on port ', 3005);
})