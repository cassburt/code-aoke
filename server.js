var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
//needs track js functions for retrieving spotifyAPI data.
var track = require('./app/track/track.js');




var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));
app.use('/public', express.static('public'))

var port = 8888;


app.get('/', function(req, res){
  res.render('index.html');
})

app.post('/genreTracks', function(req, res){
  console.log('inside of /tracks get')
  var genre = req.body.genre;
  //function to pass as a callback to trackFetch
  var send = function(){
    res.send(track.tracks);
  }
  track.genreFetch(genre, send);
});

app.post('/yearTracks', function(req, res){
  console.log('inside of /tracks get')
  var year = req.body.year;
  //function to pass as a callback to trackFetch
  var send = function(){
    res.send(track.tracks);
  }
  track.yearFetch(year, send);
});

app.post('/termTracks', function(req, res){
  console.log('inside of /tracks get')
  var term = req.body.term;
  //function to pass as a callback to trackFetch
  var send = function(){
    res.send(track.tracks);
  }
  track.termFetch(term, send);
});




app.listen(port, function(){
  console.log('app listening on port ' + port);
})
