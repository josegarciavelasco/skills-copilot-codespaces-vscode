// Create web server

// The comments.html file should contain an h1 tag with the text "Comments" and a ul tag with 5 li tags containing the text "Comment 1", "Comment 2", "Comment 3", "Comment 4" and "Comment 5".

// The file should be read and sent only once when the server starts.

// The server should respond with the contents of the file for all requests.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.html', 'utf8', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(3000);
console.log('Server listening on port 3000');
// In the code above, we first require the http and fs modules. We then create a server that listens on port 3000. When a request is received, we read the comments.html file and send its contents to the client. We set the Content-Type header to text/html and send the data to the client using the res.end() method.

// The server listens on port 3000 and sends the contents of the comments.html file to the client for all requests. The file is read and sent only once when the server