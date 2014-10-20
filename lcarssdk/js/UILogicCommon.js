/*
* For now containing stuff around speech capture and socket.io - don't forget to change the url to your server...
*/

/*$('<input>').attr({
    type: 'hidden',
    id: 'foo',
    name: 'bar'
}).appendTo('body');*/

/*
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) { 
  console.log(event) 
}
recognition.start();
*/

var socket = io.connect('http://192.168.1.65:3001');

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-GB";
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(event) { 
	var final_transcript ='';
	var interim_transcript = '';
	console.log(event.results[(event.results.length -1)][0].transcript);
	var newPayload = "<h1>" + event.results[(event.results.length -1)][0].transcript + "</h1>"+ $('.results').html();
	$('#results').html(newPayload);



    for (var i = event.resultIndex; i < event.results.length; ++i) {
    	//console.log(event.results[i][0].transcript);
		socket.emit('voiceCommand',event.results[i][0].transcript);



      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;

      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
	  
}
recognition.start();