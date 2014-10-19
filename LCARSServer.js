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
//app.use('/lcarssdk/js', express.static(__dirname + '/lcarssdk/js'));
//app.use('/lcarssdk/css', express.static(__dirname + '/lcarssdk/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
//app.use('/sketch', express.static(__dirname + '/sketch'));

//app.use('/index.html', express.static(__dirname + '/index.html'));


app.get("*", function(req, res){
  //invertPinState();
  var host = req.url.replace("/","");
  console.log("host: " + host);
  if(req.url == "/"){
    res.render('index');  
  } else{
    res.render(host);
  }
});


//var io = require('socket.io')();

//socket.io stuff
var server = app.listen(3001);
var io = require('socket.io').listen(server);
//var sockets = [];

io.on('connection', function(socket){ 
  console.log('got socket.io connection');
  //sockets.push(socket);

  //socket.emit('news', { hello: 'world' });
  socket.volatile.emit('metrics', { 
    uptime: os.uptime() 
  });
});

