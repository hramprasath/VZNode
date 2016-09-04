
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
console.log('my message server started...');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 5000; // set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router
// test route to make sure everything is working (accessed at GET http://localhost:8085/api)
router.get('/', function (req, res) {
    res.json({ message: 'GET request works' });
});
router.post('/webhook', function (req, res) {
    var intent = req.body.result.metadata.intentName;
    switch (intent) {
        case "Initiate":
            return {
                   {
        speech: "Hi,there. I am Ent, an entertainment bot.  Would you like to see some recommendations for tonight?",
        displayText: "TV Recommendations",
        data: {     },
        source: "Zero Service - app_zero.js"    }
                
            };
            break;
        case "Billing":
            res.json(billInquiry());
            break;
        case "yes-initiate":
            res.json(recommendTV());
            break;
        case "Recommendation":
            res.json(recommendTV());
            break;
        default:
            res.json(recommendTV());
    }
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Node server started...');
//# sourceMappingURL=server.js.map
