var users = require('./users.js');
const userData = require('./lib/userData.json');


var serverData = {
  readAll: function(req, res) {
    res.status(200).send(userData);
  },
  findUserById: function(req, res) {
    res.status(200).send(userData[req.params.id-1])
  },
  getAdmins: function(req,res) {
    var matches = [];
    for (i = 0; i < userData.length; i++) {
      if (userData[i].type === 'admin') {
        matches.push(data[i])
      }
      return res.status(200).send(matches); 
    }
      return res.status(200).send(null); 
  },
  findUserByQuery: function(req, res, next) {
    var matches = [];
    if (req.query.search) {
      for (var i = 0; i < userData; i++) {
        if (req.query.search === userData[i].email) {
           matches.push(userData[i]);
        } else if (req.query.search === userData[i].state) {
            matches.push(userData[i]);
        } else if (req.query.search === userData[i].last_name) {
          matches.push(userData[i]);
        }
      }
      return res.status(200).send(matches);
    }
    return res.status(200).send(null);
  },
  

  


}

module.exports = serverData;