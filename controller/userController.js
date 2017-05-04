var SerialPort = require('serialport');
var request = require('request');

var port = new SerialPort('/dev/tty.usbmodem1411', {
    baudRate: 9600,
    parser: SerialPort.parsers.readline("\n"),
    autoOpen: false
});

// port.on('data', function (data) {
//     lecture(data);
//     console.log("lecture");
//     console.log(data);
//     return data;
// });
var count = 0;
var card = "";
var port = null;
function lecture (callback) {
    count = 0;
    port = new SerialPort('/dev/tty.usbmodem1411', {
        baudRate: 9600,
        parser: SerialPort.parsers.readline("\n"),
        autoOpen: false
    });
    port.open(function () {
        console.log('open');
    });
    port.on('data', function(data) {
        count++;
        console.log('data received: ' + data);
        if(count == 3) {
            card = data;
            port.close(function () {
                console.log('closing');
                port = null;
                return callback(true, card);
            });
        }
    });
}

function ecriture (data, callback) {
    port = new SerialPort('/dev/tty.usbmodem1411', {
        baudRate: 9600,
        parser: SerialPort.parsers.readline("\n"),
        autoOpen: false
    });
    port.open(function () {
        console.log('open');
        port.write(data);
        return callback(true)
    });
}


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

/*exports.inscriptionStep = function (req, res) {
    console.log(req.params);
    res.render('user/inscription-step', {lastname: req.params.lastname, firstname: req.params.firstname});
};*/

exports.getCard = function (req, res) {
    lecture(function (ok, card) {
        if(ok) {
            console.log(card);
            res.status(200).json({card: card});
        }
    });
};

exports.getCapsule = function (req, res) {
    console.log(req.params);
};