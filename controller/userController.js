var SerialPort = require('serialport');
var request = require('request');

var port = new SerialPort('/dev/tty.usbmodem1421', {
    baudRate: 9600,
    parser: SerialPort.parsers.readline("\n")
});


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
exports.accueil = function (req, res) {
    res.render('user/accueil');
};

exports.capsule = function (req, res) {
    res.render('user/capsule');
};

exports.capsuleStep = function (req, res) {
    console.log(req.params.id);

    port.on('data', function (data) {
        port.close();

        request('http://www.google.com', function (err, response, body) {
           console.log(err);
        });
    });
    res.render('user/capsule-step');
};

exports.inscription = function (req, res) {
    res.render('user/inscription');
};