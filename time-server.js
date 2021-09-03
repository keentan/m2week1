const net = require('net');
const server = net.createServer(function(socket) {
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();

if (month < 10) month = "0"+month
if (day < 10) day = "0"+day
	if (hours < 10) hours = "0"+hours
var formattedDate = year+"-"+month+"-"+day+" "+hours+":"+minutes
socket.write(formattedDate+"\n");
socket.end();
});
server.listen(process.argv[2])

/*  'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2])) 
    */
    