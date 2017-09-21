//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://Guy:Guyguy@ds127994.mlab.com:27994/cen3031_fall_2017', 
  },
  googleMaps: {
    key: ''
  },
  port: 8080
};
