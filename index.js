
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
console.log('my message server started...');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var PORT = process.env.PORT || 9000;
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router
// test route to make sure everything is working (accessed at GET http://localhost:8085/api)
router.get('/', function (req, res) {
    res.json({ message: 'GET request works' });
});
router.post('/webhook', function (req, res) {
    res.json(recommendTV());
    
});


function recommendTV() {
    return ( {
            "facebook": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "External call - Shark Tank",
                                "subtitle": "Shark Tank",
                                "image_url": "http://image.vam.synacor.com.edgesuite.net/0f/07/0f07592094a2a596d2f6646271e9cb0311508415/w=414,h=303,crop=auto/?sig=88c390c980d4fa53d37ef16fbdc53ec3dfbad7d9fa626949827b76ae37140ac3&amp;app=powerplay",
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "http://www.youtube.com/embed/SQ1W7RsXL3k",
                                        "title": "Watch video"
                                    },
                                    {
                                        "type": "web_url",
                                        "url": "https://m.verizon.com/myverizonmobile/router.aspx?token=tvlisting",
                                        "title": "Record"
                                    }
                                ]
                            },
                            {
                                "title": "Game of Thrones",
                                "subtitle": "Game of Thrones",
                                "image_url": "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://www.youtube.com/watch?v=36q5NnL3uSM",
                                        "title": "Watch video"
                                    },
                                    {
                                        "type": "web_url",
                                        "url": "https://m.verizon.com/myverizonmobile/router.aspx?token=tvlisting",
                                        "title": "Record"
                                    }
                                ]
                            },
                            {
                                "title": "The Night Of",
                                "subtitle": "The Night Of",
                                "image_url": "http://ia.media-imdb.com/images/M/MV5BMjQyOTgxMDI0Nl5BMl5BanBnXkFtZTgwOTE4MzczOTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://www.youtube.com/watch?v=36q5NnL3uSM",
                                        "title": "Watch video"
                                    },
                                    {
                                        "type": "web_url",
                                        "url": "https://m.verizon.com/myverizonmobile/router.aspx?token=tvlisting",
                                        "title": "Record"
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        }
   );
}
// START THE SERVER
// =============================================================================
app.use('/api', router);
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
