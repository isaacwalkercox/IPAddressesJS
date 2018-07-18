//IPAdressesJS (C) Isaac Walker-Cox 2018

//find 8080 by default
FindPort("8080");
function FindPort(port) {
    for (var i = 0; i !== 254; i++) {
        var request = new XMLHttpRequest();
	request.addEventListener("timeout", function (xml, event) {
            console.log("COULD NOT REACH IP on port " + port);
        });
        request.addEventListener("loadend", function (xml, event) {
            console.log("IP reached on " + "192.168.1." + i.toString() + " at port " + port); // Please change the first three octets if they are different for the network you will be scanning
        });
        request.open("GET", "192.168.1." + i.toString() + ":" + port);
        request.send();
	console.log("Request sent to " + "192.168.1." + i.toString());
      
    }
}
