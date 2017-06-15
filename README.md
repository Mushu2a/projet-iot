# Genius Cap's

## Installation
```bash
npm install
```

## Lancement
Dans plusieurs terminals

1 - le serveur node

```bash
node server.js
```
2 - electron

```bash
electron . 
```

## Modification à faire

1 - Trouver sur quel port usb l'arduino est branché via le raspberry

```bash
ls /dev/tty*
```
2 - Modifier le code dans ``projet-iot/controller/userController.js`` et remplacer avec la nouvelle valeur ici :

```bash
var port = new SerialPort('/dev/ttyDCMA0');
```
