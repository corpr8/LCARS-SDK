var express = require('express');
var app = express();
var expressHbs = require('express3-handlebars');
var favicon = require('serve-favicon');

var os = require('os');
var cpuModel = os.cpus()[0].model;
console.log("arch:" + os.arch());
console.log("cpu model:" + cpuModel);


//setup views and stuff 
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

console.log("__dirname: " + __dirname);

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use('/lcarssdk', express.static(__dirname + '/lcarssdk'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));


app.get("*", function(req, res){
  var host = req.url.replace("/","");
  console.log("host: " + host);
  if(req.url == "/"){
    res.render('index');  
  } else{
    res.render(host);
  }
});

var server = app.listen(3001);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){ 
  console.log('got socket.io connection');

  socket.on('voiceCommand', function (data){
    handleVoiceCommand(data);
  });

  //socket.emit('news', { hello: 'world' });
  socket.volatile.emit('metrics', { 
    uptime: os.uptime() 
  });
});

var handleVoiceCommand = function(data){
  /*
  * voice commands functions calls in here
  */
  console.log(data);
}