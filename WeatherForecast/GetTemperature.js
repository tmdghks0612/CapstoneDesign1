request = require("request")
express = require("express")
xml2js = require('xml2js')
utf8 = require('utf8');

parser = new xml2js.Parser()

app = express()

i=0
var temperature
function getTemperature(){
	url = "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4113552000"

	request(url, function(err, res, body) {
		parser.parseString(body, function(err, result){
			temperature = result["rss"]["channel"][0]["item"][0]["description"][0]["body"][0]["data"][0]["temp"][0]
			getThingSpeak()
		})
		//console.log(body.data)
	})

	if (++i > 20) return
	setTimeout(getTemperature, 3600000)
}

function getThingSpeak() {

	console.log(temperature)
	url = "https://api.thingspeak.com/update?api_key=R2GVS63LPW2DD8R8&field3="+ temperature
	request(url, function(err, res, body) {
		console.log(body)
	})

}
console.log(`ready`)

getTemperature()