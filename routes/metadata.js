var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

});

router.get('/menus', function(req, res, next) {
  // res.send(['respond with a resource']);
  res.type('application/json').send([{
    "name": "Home",
    "link": "/home",
    "childMenus": []
  }, {
    "name": "Dashboard",
    "link": "/dashboard",
    "childMenus": []
  }, {
    "name": "Appointment",
    "link": "/appointment",
    "childMenus": []
  }, {
    "name": "Services",
    "link": "/services",
    "childMenus": [{
        "name": "Hair",
        "link": "/hair",
        "childMenus": []
      },{
        "name": "Skin",
        "link": "/skin",
        "childMenus": []
      },{
        "name": "Waxing",
        "link": "/waxing",
        "childMenus": []
      },{
        "name": "Bridal",
        "link": "/bridal",
        "childMenus": []
      },{
        "name": "Threading",
        "link": "/threading",
        "childMenus": []
      },{
        "name": "Pedicure & Manicure",
        "link": "/pedimani",
        "childMenus": []
      }]
  }, {
    "name": "Shop",
    "link": "/shop",
    "childMenus": []
  }, {
    "name": "Contact US",
    "link": "/contactus",
    "childMenus": []
  }]);
});

module.exports = router;