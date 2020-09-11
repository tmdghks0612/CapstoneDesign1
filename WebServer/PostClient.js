const request = require('request')

request.post('http://localhost:8080', {
  json: {"name":"kim","color":"red","city":"seoul","ip":"163.239.166.191","time":"2020-03-23 02:36:20","email":"ekyuho@gmail.com","stuno":"20202030"} 
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(body)
})
