//console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
const http = require('http');
const fs = require('fs');

const servak = http.createServer(function(in1,out1){
  const indexPage = fs.readFileSync('D:/Teach/test1/public/index.html');
  out1.setHeader('ContentType', 'text/html')
  out1.end(indexPage);
});

servak.listen(80);

/*
function createServer(onRequestCallback) {
  /* waiting for request 
  // whaen request fired:
  onRequestCallback(req, resp)
}*/