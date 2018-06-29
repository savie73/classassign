var express = require("express");
var app = express();

app.set("port", process.env.PORT || 5000)
    .use(express.json())
    .use(express.urlencoded())
	.use(express.static(__dirname + "/public"))
	.get("/video/:id", getVideo)
	.get("/tags", getTags)
	.post("/video", postVideo)
	.listen(app.get("port"), function() {
		console.log("listening" + app.get("port"));
	});

	function postVideo(req, res) {
		console.log("creating video..");
		
		var title = req.body.title;
		console.log("Title : " + title);

		res.json({success:true});
	}

	function getVideo(req, res) {
		console.log("getting video..");
		var id = req.params.id;
		console.log("lookign for id");

		//TODO: get video from db
		var result = {title: "Charlie bit my finger",
						id: id,
						link: "https://www.youtube.com/watch?v=_OBlgSz8sSM"};

		res.json(result);
	}

	function getTags(req, res) {
		console.log("getting tags");
		var result = [{id: 1, name: "Comedy"},
					  {id: 2, name: "Cat Videos"},
					  {id: 3, name: "ACtions"}];

		res.json(result);
	}