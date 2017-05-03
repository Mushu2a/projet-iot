var express = require('express');
var app = express();

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('hbs').__express);
app.use(express.static(__dirname + '/assets'));

// var SerialPort = require('serialport');

// var port = new SerialPort('/dev/tty.usbmodem1421', {
//     baudRate: 9600,
//     parser: SerialPort.parsers.readline("\n")
// });


// open errors will be emitted as an error event
// port.on('error', function(err) {
//     console.log('Error: ', err.message);
// });

// app.get('/', function (req, res) {
//     console.log("toto");
//     port.write("toto");
//     port.on('data', function (data) {
//         res.send(data);
//
//         port.close();
//         console.log('Data: ' + data);
//     });
// });

require('./routes')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});