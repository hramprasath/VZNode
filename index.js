var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var servercall = require('./servicecall.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var PORT = process.env.PORT || 9000;

var router = express.Router(); 

router.post('/webhook', function (req, res) {
//app.post('/webhook', function (req, res) {
  //var intent = req.body.result.metadata.intentName;
 /* var intent = req.body.result.action;
  var mysource = req.body.result.source;
 console.log('Calling from :' + mysource) ;
    switch (intent) {
        case "welcome":
             res.json(welcome());
            break;
        case "Billing":
            res.json(billInquiry());
            break;
        case "showrecommendation":
            res.json(recommendTV());
            break;
        case "Recommendation":
            res.json(recommendTV());
            break;
        case "record":
            res.json(record(req));
            break;
        case "upsell":
            res.json(upsell(req));
            break;
        case "externalcall":
            recommendTVNew(function (str) { 
                console.log("inside showrecommendation "); 
                res.json(recommendTVNew1(str)); 
            }); 
            break;
        default:
            res.json(recommendTV());
    }*/
    
     res.json(recommendTV())
});

function welcomeMsg()
{
    
    return (
        {
             speech: " Hey Tabi, Welcome to Verizon!",
            
        },
        
        {
        speech: "Want to know what's on tonight? When your favourite sports team is playing? What time your favourite show is coming on? I can answer almost anything, so try me!    Link me to your Verizon account and I can send you alerts and important status changes through Messenger    ",
        displayText: "Subscribe",
        data: {
            "facebook": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "button",
                        "text": " Want to know what's on tonight? When your favourite sports team is playing? What time your favourite show is coming on? I can answer almost anything, so try me!         Link me to your Verizon account and I can send you alerts and important status changes through Messenger ",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Link Account",
                                "payload": "Link Account"
                            }
                        ]
                    }
                }
            }
        },
        source: "Verizon.js"
    }
    
    
    );	
	
}
    
}



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
