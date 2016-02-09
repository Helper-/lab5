var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
  var friend_name = req.query.name;
  var friend_desp = req.query.description;
  var friend_img = "http://lorempixel.com/400/400/people";
  var new_friend = {
	  'name' : friend_name,
	  'description' : friend_desp,
	  'imageURL' : friend_img
  };

  console.log(new_friend);
  data["friends"].push(new_friend);
	res.render('add',data);
 }
