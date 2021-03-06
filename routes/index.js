var express = require('express');
var router = express.Router();


var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB().DocumentClient();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payseuro', function(req, res) {
  var params = {
    TableName : "Countries",
    ProjectionExpression: "nom",
    ExpressionAttributeValues: {
        ":region": "Europe"
    }
  };
  docClient.query(params, function(err, data) {
    res.render('payseuro', {
      "payseuro" : data.Items
    });
  });
});
module.exports = router;

