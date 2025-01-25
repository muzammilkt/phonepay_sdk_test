var http = require('http');
var uniqid = require('uniqid')
var sha256 = require('sha256')
var axios = require('axios');
const { Client1, Client2 } = require('./payload_backup');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // http header
    var url = req.url;

    console.log(url);

    if (url === '/about') {
        res.write('<h1>about us page<h1>'); //write a response
        res.end(); //end the response
    } else if (url === '/payment') {

        let tx_uuid = uniqid();

        let normalPayLoad = { ...Client2, "merchantTransactionId": tx_uuid };
        let saltKey = '71b3f3a3-6948-4143-b785-2a6595bd2240';
        let saltIndex = 1;
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++
        let bufferObj = Buffer.from(JSON.stringify(normalPayLoad), "utf8");
        let base64String = bufferObj.toString("base64");
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++
        //console.log(base64String)
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++
        let string = base64String + '/pg/v1/pay' + saltKey;


        let sha256_val = sha256(string);
        let checksum = sha256_val + '###' + saltIndex;
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++
        //console.log(checksum);
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++
        axios.post('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', {
            'request': base64String
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'accept': 'application/json'
            }
        }).then(function (response) {
            res.write(response)
            // res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
        }).catch(function (error) {
            console.log(error)
            // res.render('index', { page_respond_data: JSON.stringify(error) });
        });

        res.end();

    } else {
        res.write('<h1>Hello World!<h1>'); //write a response
        res.end(); //end the response
    }
}).listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
});