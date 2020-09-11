request = require("request")
express = require("express")

bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

PORT = 8080

app.get('/', function(req, res){
	res.send(req.body)
})

app.post('/', function(req, res){
	console.log(req.body)
	res.send(req.body)
})

app.listen(PORT, function(){
	console.log('app listen')
})